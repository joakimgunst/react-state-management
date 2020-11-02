import Head from "next/head";
import React, { useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Counter from "../components/Counter";

export default function UseState() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((counter) => counter + 1);

  return (
    <Layout>
      <Head>
        <title>useState</title>
      </Head>
      <h1>useState</h1>
      <ButtonContainer onClick={increment} />
      <CounterContainer counter={counter} />
    </Layout>
  );
}

function ButtonContainer({ onClick }: { onClick(): void }) {
  return <Button onClick={onClick}>Increment</Button>;
}

function CounterContainer({ counter }: { counter: number }) {
  return <Counter>{counter}</Counter>;
}
