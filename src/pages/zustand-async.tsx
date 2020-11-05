import React, { useEffect } from "react";
import create from "zustand";
import AddForm from "components/AddForm";
import TodoList from "components/TodoList";
import { Todo, Todos } from "model";
import * as api from "api";
import { combine } from "zustand/middleware";
import TodoLayout from "components/TodoLayout";
import TodoFilter from "components/TodoFilter";

const initialState = {
  todos: [] as Todos,
  showCompleted: false,
};

type State = typeof initialState;

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
    toggleTodo: async (todo: Todo) => {
      await api.updateTodo(todo.id, { completed: !todo.completed });
      const todos = await api.getTodos();
      set({ todos });
    },
    toggleShowCompleted: () =>
      set(({ showCompleted }) => ({ showCompleted: !showCompleted })),
  }))
);

const selectVisibleTodos = ({ todos, showCompleted }: State) =>
  todos.filter(t => t.completed === showCompleted);

export default function Page() {
  return (
    <TodoLayout title="Zustand Async">
      <AddFormContainer />
      <TodoFilterContainer />
      <TodoListContainer />
    </TodoLayout>
  );
}

function AddFormContainer() {
  const addTodo = useStore(state => state.addTodo);
  return <AddForm onAdd={addTodo} />;
}

function TodoFilterContainer() {
  const showCompleted = useStore(state => state.showCompleted);
  const toggle = useStore(state => state.toggleShowCompleted);
  return <TodoFilter showCompleted={showCompleted} onToggle={toggle} />;
}

function TodoListContainer() {
  const todos = useStore(selectVisibleTodos);
  const getTodos = useStore(state => state.getTodos);
  const toggleTodo = useStore(state => state.toggleTodo);
  useEffect(() => void getTodos(), []);
  return <TodoList todos={todos} onToggle={toggleTodo} />;
}
