import React from "react";
import AddForm from "components/AddForm";
import TodoList from "components/TodoList";
import { Todo, Todos } from "model";
import * as api from "api";
import TodoLayout from "components/TodoLayout";
import useSWR, { mutate, SWRConfig } from "swr";

export default function Page() {
  return (
    <SWRConfig value={{ fetcher: api.fetcher }}>
      <TodoLayout title="SWR">
        <AddFormContainer />
        <TodoListContainer />
      </TodoLayout>
    </SWRConfig>
  );
}

function AddFormContainer() {
  const addTodo = async (todo: Todo) => {
    await api.addTodo(todo);
    await mutate("/api/todos");
  };

  return <AddForm onAdd={addTodo} />;
}

function TodoListContainer() {
  const { data: todos } = useSWR<Todos>("/api/todos");

  const deleteTodo = async (todo: Todo) => {
    await api.deleteTodo(todo.id);
    await mutate("/api/todos");
  };

  if (!todos) return null;
  return <TodoList todos={todos} onDelete={deleteTodo} />;
}
