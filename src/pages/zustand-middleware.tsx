import React from "react";
import Layout from "components/Layout";
import Button from "components/Button";
import Counter from "components/Counter";
import create from "zustand";
import { combine, devtools } from "zustand/middleware";

// devtools middleware allows us to use the Redux devtools
// combine middleware lets TypeScript infer type of state
// redux middleware allows us to use dispatch instead of action functions

const useStore = create(
  devtools(
    combine({ counter: 0 }, set => ({
      increment: () => set(state => ({ counter: state.counter + 1 })),
    }))
  )
);

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
