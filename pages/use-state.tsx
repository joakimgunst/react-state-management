import React, { useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Counter from "../components/Counter";

export default function UseState() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((counter) => counter + 1);

  return (
    <Layout title="useState">
      <ButtonContainer onClick={increment} />
      <CounterContainer counter={counter} />
    </Layout>
  );
}

function ButtonContainer({ onClick }: { onClick(): void }) {
  return <Button label="Increment" onClick={onClick} />;
}

function CounterContainer({ counter }: { counter: number }) {
  return <Counter value={counter} />;
}
