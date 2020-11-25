import React, { useEffect } from "react";
import { atom, RecoilRoot, useRecoilCallback, useRecoilState } from "recoil";
import { Todo, Todos } from "model";
import TodoLayout from "components/TodoLayout";
import AddForm from "components/AddForm";
import TodoList from "components/TodoList";
import * as api from "api";
import LoadingSpinner from "components/LoadingSpinner";

const todosState = atom({
  key: "todos",
  default: undefined as Todos | undefined,
});

export default function Page() {
  return (
    <RecoilRoot>
      <TodoLayout title="Recoil (async)">
        <AddFormContainer />
        <TodoListContainer />
      </TodoLayout>
    </RecoilRoot>
  );
}

function AddFormContainer() {
  const addTodo = useRecoilCallback(({ set }) => async (todo: Todo) => {
    await api.addTodo(todo);
    const todos = await api.getTodos();
    set(todosState, todos);
  });

  return <AddForm onAdd={addTodo} />;
}

function TodoListContainer() {
  const [todos, setTodos] = useRecoilState(todosState);

  const deleteTodo = useRecoilCallback(({ set }) => async (todo: Todo) => {
    await api.deleteTodo(todo.id);
    const todos = await api.getTodos();
    set(todosState, todos);
  });

  async function fetchTodos() {
    const todos = await api.getTodos();
    setTodos(todos);
  }

  useEffect(() => void fetchTodos(), []);

  if (!todos) return <LoadingSpinner />;
  return <TodoList todos={todos} onDelete={deleteTodo} />;
}
