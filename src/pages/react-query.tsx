import React from "react";
import AddForm from "components/AddForm";
import TodoList from "components/TodoList";
import { Todos } from "model";
import * as api from "api";
import TodoLayout from "components/TodoLayout";
import LoadingSpinner from "components/LoadingSpinner";
import {
  useMutation,
  useQuery,
  useQueryCache,
  QueryCache,
  ReactQueryCacheProvider,
} from "react-query";

const queryCache = new QueryCache();

export default function Page() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <TodoLayout title="React Query">
        <AddFormContainer />
        <TodoListContainer />
      </TodoLayout>
    </ReactQueryCacheProvider>
  );
}

function AddFormContainer() {
  const queryCache = useQueryCache();

  const [addTodo] = useMutation(api.addTodo, {
    onSuccess: () => queryCache.invalidateQueries("todos"),
  });

  return <AddForm onAdd={addTodo} />;
}

function TodoListContainer() {
  const queryCache = useQueryCache();
  const { data: todos } = useQuery<Todos>("todos", api.getTodos);

  const [deleteTodo] = useMutation(api.deleteTodo, {
    onSuccess: () => queryCache.invalidateQueries("todos"),
  });

  if (!todos) return <LoadingSpinner />;
  return <TodoList todos={todos} onDelete={todo => deleteTodo(todo.id)} />;
}
