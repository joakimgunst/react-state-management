import React, { useState } from "react";
import AddForm from "components/AddForm";
import { Todo, Todos } from "model";
import TodoList from "components/TodoList";
import TodoLayout from "components/TodoLayout";
import { pureAddTodo, pureToggleTodo } from "utils";

export default function Page() {
  const [todos, setTodos] = useState<Todos>([]);

  const addTodo = (todo: Todo) => setTodos(todos => pureAddTodo(todos, todo));

  const toggle = ({ id }: Todo) => setTodos(todos => pureToggleTodo(todos, id));

  return (
    <TodoLayout title="Prop Drilling">
      <AddForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggle} />
    </TodoLayout>
  );
}
