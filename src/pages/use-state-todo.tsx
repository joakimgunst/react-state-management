import React, { useState } from "react";
import AddForm from "components/AddForm";
import { Todo, Todos } from "model";
import TodoList from "components/TodoList";
import TodoLayout from "components/TodoLayout";

export default function UseState() {
  const [todos, setTodos] = useState<Todos>({});

  const addTodo = (todo: Todo) =>
    setTodos(state => ({ ...state, [todo.id]: todo }));

  const toggleTodo = (id: string) =>
    setTodos(state => ({
      ...state,
      [id]: { ...state[id], completed: !state[id].completed },
    }));

  return (
    <TodoLayout title="useState">
      <AddForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
    </TodoLayout>
  );
}
