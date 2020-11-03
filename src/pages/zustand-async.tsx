import React from "react";
import Layout from "components/Layout";
import Button from "components/Button";
import Counter from "components/Counter";
import create, { State } from "zustand";
import { getCounterValue, incrementCounter } from "api/counter";

interface CounterState extends State {
  counter: number;
  loading: boolean;
  increment(): void;
}

const useStore = create<CounterState>(set => ({
  counter: 0,
  loading: false,
  increment: async () => {
    set({ loading: true });
    await incrementCounter();
    const value = await getCounterValue();
    set({ counter: value, loading: false });
  },
}));

export default function ZustandAsync() {
  return (
    <Layout title="Zustand Async">
      <ButtonContainer />
      <CounterContainer />
    </Layout>
  );
}

function ButtonContainer() {
  const increment = useStore(state => state.increment);
  return <Button label="Increment" onClick={increment} />;
}

function CounterContainer() {
  const counter = useStore(state => state.counter);
  const loading = useStore(state => state.loading);
  return <Counter value={counter} loading={loading} />;
}
