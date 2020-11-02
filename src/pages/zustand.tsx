import React from "react";
import Layout from "components/Layout";
import Button from "components/Button";
import Counter from "components/Counter";
import create, { State } from "zustand";

interface CounterState extends State {
  counter: number;
  increment(): void;
}

const useStore = create<CounterState>(set => ({
  counter: 0,
  increment: () => set(state => ({ counter: state.counter + 1 })),
}));

export default function Zustand() {
  return (
    <Layout title="Zustand">
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
  return <Counter value={counter} />;
}
