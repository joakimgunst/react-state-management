import React from "react";
import create, { State } from "zustand";
import { Todo } from "model";
import TodoLayout from "components/TodoLayout";
import AddForm from "components/AddForm";
import TodoList from "components/TodoList";
import { combine } from "zustand/middleware";

const initialState = {
  todos: [] as Todo[],
};

const useStore = create(
  combine(initialState, set => ({
    addTodo: (todo: Todo) => set(state => ({ todos: [...state.todos, todo] })),
  }))
);

export default function Zustand() {
  return (
    <TodoLayout title="Zustand">
      <AddFormContainer />
      <TodoListContainer />
    </TodoLayout>
  );
}

function AddFormContainer() {
  const addTodo = useStore(state => state.addTodo);
  return <AddForm onAdd={addTodo} />;
}

function TodoListContainer() {
  const todos = useStore(state => state.todos);
  return <TodoList todos={todos} />;
}
