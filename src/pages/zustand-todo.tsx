import React from "react";
import create from "zustand";
import { Todo, Todos } from "model";
import TodoLayout from "components/TodoLayout";
import AddForm from "components/AddForm";
import TodoList from "components/TodoList";
import { combine, devtools } from "zustand/middleware";
import * as utils from "utils";
import TodoFilter from "components/TodoFilter";

const initialState = {
  todos: [] as Todos,
  showCompleted: false,
};

type State = typeof initialState;

const useStore = create(
  devtools(
    combine(initialState, set => ({
      addTodo: (todo: Todo) =>
        set(({ todos }) => ({ todos: utils.pureAddTodo(todos, todo) })),
      toggleTodo: (id: string) =>
        set(({ todos }) => ({ todos: utils.pureToggleTodo(todos, id) })),
      toggleShowCompleted: () =>
        set(({ showCompleted }) => ({ showCompleted: !showCompleted })),
    }))
  )
);

const selectVisibleTodos = ({ todos, showCompleted }: State) =>
  todos.filter(t => t.completed === showCompleted);

export default function Zustand() {
  return (
    <TodoLayout title="Zustand">
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
  const toggleTodo = useStore(state => state.toggleTodo);
  return <TodoList todos={todos} onToggle={toggleTodo} />;
}
