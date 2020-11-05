import React, { Suspense, useEffect } from "react";
import { atom, Provider, useAtom } from "jotai";
import { Todo, Todos } from "model";
import TodoLayout from "components/TodoLayout";
import AddForm from "components/AddForm";
import TodoList from "components/TodoList";
import { pureAddTodo, pureToggleTodo } from "utils";
import * as api from "api";
import LoadingSpinner from "components/LoadingSpinner";

const todosAtom = atom([] as Todos);

const fetchTodosAtom = atom(
  get => get(todosAtom),
  async (_, set) => {
    const todos = await api.getTodos();
    set(todosAtom, todos);
  }
);

export default function Page() {
  return (
    <Provider>
      <TodoLayout title="Jotai Async">
        <AddFormContainer />
        <Suspense fallback={<LoadingSpinner />}>
          <TodoListContainer />
        </Suspense>
      </TodoLayout>
    </Provider>
  );
}

function AddFormContainer() {
  const [, setTodos] = useAtom(todosAtom);
  const addTodo = async (todo: Todo) => {
    await api.addTodo(todo);
    const todos = await api.getTodos();
    setTodos(todos);
  };

  return <AddForm onAdd={addTodo} />;
}

function TodoListContainer() {
  const [, setTodos] = useAtom(todosAtom);
  const [todos, fetch] = useAtom(fetchTodosAtom);
  useEffect(() => void fetch(), []);

  const deleteTodo = async (todo: Todo) => {
    await api.deleteTodo(todo.id);
    const todos = await api.getTodos();
    setTodos(todos);
  };

  return <TodoList todos={todos} onDelete={deleteTodo} />;
}
