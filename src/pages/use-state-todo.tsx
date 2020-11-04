import React, { useState } from "react";
import AddForm from "components/AddForm";
import { Todo, Todos } from "model";
import TodoList from "components/TodoList";
import TodoLayout from "components/TodoLayout";
import * as utils from "utils";

export default function UseState() {
  const [todos, setTodos] = useState<Todos>([]);

  const addTodo = (todo: Todo) => setTodos(todos => utils.addTodo(todos, todo));

  const toggleTodo = (id: string) =>
    setTodos(todos => utils.toggleTodo(todos, id));

  return (
    <TodoLayout title="useState">
      <AddForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
    </TodoLayout>
  );
}
