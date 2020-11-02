import React from "react";
import Layout from "components/Layout";
import Button from "components/Button";
import Counter from "components/Counter";
import {
  atom,
  RecoilRoot,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const counterState = atom({
  key: "counterState",
  default: 0,
});

const appleState = selector({
  key: "appleState",
  get: ({ get }) => {
    return Array(get(counterState))
      .fill(0)
      .map(() => "🍎")
      .join("");
  },
});

export default function Recoil() {
  return (
    <Layout title="Recoil">
      <RecoilRoot>
        <ButtonContainer />
        <CounterContainer />
        <AppleContainer />
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

function AppleContainer() {
  const apples = useRecoilValue(appleState);
  return <div>{apples}</div>;
}
