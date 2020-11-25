import React, { useEffect } from "react";
import create from "zustand";
import AddForm from "components/AddForm";
import TodoList from "components/TodoList";
import { Todo, Todos } from "model";
import * as api from "api";
import { combine } from "zustand/middleware";
import TodoLayout from "components/TodoLayout";
import LoadingSpinner from "components/LoadingSpinner";

const initialState = {
  todos: undefined as Todos | undefined,
};

const useStore = create(
  combine(initialState, set => ({
    getTodos: async () => {
      const todos = await api.getTodos();
      set({ todos });
    },
    addTodo: async (todo: Todo) => {
      await api.addTodo(todo);
      const todos = await api.getTodos();
      set({ todos });
    },
    deleteTodo: async (todo: Todo) => {
      await api.deleteTodo(todo.id);
      const todos = await api.getTodos();
      set({ todos });
    },
  }))
);

export default function Page() {
  return (
    <TodoLayout title="Zustand (async)">
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
  const getTodos = useStore(state => state.getTodos);
  const deleteTodo = useStore(state => state.deleteTodo);
  useEffect(() => void getTodos(), []);

  if (!todos) return <LoadingSpinner />;
  return <TodoList todos={todos} onDelete={deleteTodo} />;
}
