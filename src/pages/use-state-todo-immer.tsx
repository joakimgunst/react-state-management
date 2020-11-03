import React, { useState } from "react";
import AddForm from "components/AddForm";
import { Todo, Todos } from "model";
import TodoList from "components/TodoList";
import TodoLayout from "components/TodoLayout";
import produce from "immer";

export default function UseStateImmer() {
  const [todos, setTodos] = useState<Todos>({});

  const addTodo = (todo: Todo) =>
    setTodos(state =>
      produce(state, draft => {
        draft[todo.id] = todo;
      })
    );

  const toggleTodo = (id: string) =>
    setTodos(state =>
      produce(state, draft => {
        draft[id].completed = !draft[id].completed;
      })
    );

  return (
    <TodoLayout title="useState with Immer">
      <AddForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
    </TodoLayout>
  );
}
