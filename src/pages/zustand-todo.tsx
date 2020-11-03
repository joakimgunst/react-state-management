import React from "react";
import create from "zustand";
import { Todo, Todos } from "model";
import TodoLayout from "components/TodoLayout";
import AddForm from "components/AddForm";
import TodoList from "components/TodoList";
import { combine } from "zustand/middleware";
import produce from "immer";

const initialState = {
  todos: {} as Todos,
};

const useStore = create(
  combine(initialState, set => ({
    addTodo: (todo: Todo) =>
      set(state =>
        produce(state, draft => {
          draft.todos[todo.id] = todo;
        })
      ),
    toggleTodo: (id: string) =>
      set(state =>
        produce(state, draft => {
          draft.todos[id].completed = !draft.todos[id].completed;
        })
      ),
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
  const toggleTodo = useStore(state => state.toggleTodo);
  return <TodoList todos={todos} onToggle={toggleTodo} />;
}
