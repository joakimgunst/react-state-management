import React from "react";
import AddForm from "components/AddForm";
import TodoList from "components/TodoList";
import { Todo, Todos } from "model";
import * as api from "api";
import TodoLayout from "components/TodoLayout";
import useSWR, { mutate } from "swr";
import LoadingSpinner from "components/LoadingSpinner";

export default function Page() {
  return (
    <TodoLayout title="SWR">
      <AddFormContainer />
      <TodoListContainer />
    </TodoLayout>
  );
}

function AddFormContainer() {
  const addTodo = async (todo: Todo) => {
    await api.addTodo(todo);
    await mutate("todos");
  };

  return <AddForm onAdd={addTodo} />;
}

function TodoListContainer() {
  const { data: todos, mutate } = useSWR<Todos>("todos", api.getTodos);

  const deleteTodo = async (todo: Todo) => {
    await api.deleteTodo(todo.id);
    await mutate();
  };

  if (!todos) return <LoadingSpinner />;
  return <TodoList todos={todos} onDelete={deleteTodo} />;
}
