import React from "react";
import create from "zustand";
import AddForm from "components/AddForm";
import TodoList from "components/TodoList";
import { Todo, Todos } from "model";
import * as api from "api";
import { combine } from "zustand/middleware";
import TodoLayout from "components/TodoLayout";

const initialState = {
  todos: [] as Todos,
};

const useStore = create(
  combine(initialState, set => ({
    addTodo: async (todo: Todo) => {
      await api.addTodo(todo);
      const todos = await api.getTodos();
      set({ todos });
    },
    toggleTodo: async (id: string) => {
      await api.toggleTodo(id);
      const todos = await api.getTodos();
      set({ todos });
    },
  }))
);

export default function ZustandAsync() {
  return (
    <TodoLayout title="Zustand Async">
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
