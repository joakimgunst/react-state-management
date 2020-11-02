import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Counter from "../components/Counter";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: state => state + 1,
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

const state = store.getState();

type State = typeof state;

export default function Redux() {
  return (
    <Layout title="Redux">
      <Provider store={store}>
        <ButtonContainer />
        <CounterContainer />
      </Provider>
    </Layout>
  );
}

function ButtonContainer() {
  const dispatch = useDispatch();
  const increment = () => dispatch(counterSlice.actions.increment());
  return <Button label="Increment" onClick={increment} />;
}

function CounterContainer() {
  const counter = useSelector((state: State) => state.counter);
  return <Counter value={counter} />;
}
