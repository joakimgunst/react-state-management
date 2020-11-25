import React from "react";
import AddForm from "components/AddForm";
import TodoList from "components/TodoList";
import { Todo, Todos } from "model";
import * as api from "api";
import TodoLayout from "components/TodoLayout";
import LoadingSpinner from "components/LoadingSpinner";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

const TODOS_QUERY = gql`
  query Todos {
    todos {
      id
      text
      completed
    }
  }
`;

export default function Page() {
  return (
    <ApolloProvider client={client}>
      <TodoLayout title="Apollo">
        <AddFormContainer />
        <TodoListContainer />
      </TodoLayout>
    </ApolloProvider>
  );
}

function AddFormContainer() {
  const { refetch } = useQuery(TODOS_QUERY);

  const addTodo = async (todo: Todo) => {
    await api.addTodo(todo);
    refetch();
  };

  return <AddForm onAdd={addTodo} />;
}

function TodoListContainer() {
  const { data, refetch } = useQuery<{ todos: Todo[] }>(TODOS_QUERY);

  const deleteTodo = async (todo: Todo) => {
    await api.deleteTodo(todo.id);
    refetch();
  };

  if (!data) return <LoadingSpinner />;
  return <TodoList todos={data.todos} onDelete={deleteTodo} />;
}
