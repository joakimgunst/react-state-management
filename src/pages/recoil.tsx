import React from "react";
import Layout from "components/Layout";
import Button from "components/Button";
import Counter from "components/Counter";
import { atom, RecoilRoot, useRecoilState } from "recoil";

const counterState = atom({
  key: "counter",
  default: 0,
});

export default function Recoil() {
  return (
    <Layout title="Recoil">
      <RecoilRoot>
        <ButtonContainer />
        <CounterContainer />
      </RecoilRoot>
    </Layout>
  );
}

function ButtonContainer() {
  const [, setCounter] = useRecoilState(counterState);
  const increment = () => setCounter(counter => counter + 1);
  return <Button label="Increment" onClick={increment} />;
}

function CounterContainer() {
  const [counter] = useRecoilState(counterState);
  return <Counter value={counter} />;
}
