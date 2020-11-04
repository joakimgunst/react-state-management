import React, { useState } from "react";
import AddForm from "components/AddForm";
import { Todo, Todos } from "model";
import TodoList from "components/TodoList";
import TodoLayout from "components/TodoLayout";
import produce from "immer";

export default function UseStateImmer() {
  const [todos, setTodos] = useState<Todos>([]);

  const addTodo = (todo: Todo) =>
    setTodos(state =>
      produce(state, draft => {
        draft.push(todo);
      })
    );

  const toggleTodo = (id: string) =>
    setTodos(state =>
      produce(state, draft => {
        const index = draft.findIndex(t => t.id === id);
        draft[index].completed = !draft[index].completed;
      })
    );

  return (
    <TodoLayout title="useState with Immer">
      <AddForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
    </TodoLayout>
  );
}
