import React, { useState } from "react";
import AddForm from "components/AddForm";
import { Todo } from "model";
import TodoList from "components/TodoList";
import TodoLayout from "components/TodoLayout";

export default function UseState() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (todo: Todo) => setTodos(todos => [...todos, todo]);

  return (
    <TodoLayout title="useState">
      <AddForm onAdd={addTodo} />
      <TodoList todos={todos} />
    </TodoLayout>
  );
}
