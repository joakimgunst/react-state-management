import React from "react";
import { atom, Provider, useAtom } from "jotai";
import { Todo, Todos } from "model";
import TodoLayout from "components/TodoLayout";
import AddForm from "components/AddForm";
import TodoFilter from "components/TodoFilter";
import TodoList from "components/TodoList";
import { pureAddTodo, pureToggleTodo } from "utils";

const todosAtom = atom([] as Todos);

const showCompletedAtom = atom(false);

const visibleTodosAtom = atom(get => {
  const todos = get(todosAtom);
  const showCompleted = get(showCompletedAtom);
  return todos.filter(t => t.completed === showCompleted);
});

export default function Page() {
  return (
    <Provider>
      <TodoLayout title="Jotai">
        <AddFormContainer />
        <TodoFilterContainer />
        <TodoListContainer />
      </TodoLayout>
    </Provider>
  );
}

function AddFormContainer() {
  const [, setTodos] = useAtom(todosAtom);
  const addTodo = (todo: Todo) => setTodos(todos => pureAddTodo(todos, todo));
  return <AddForm onAdd={addTodo} />;
}

function TodoFilterContainer() {
  const [showCompleted, setShowCompleted] = useAtom(showCompletedAtom);
  const toggle = () => setShowCompleted(value => !value);
  return <TodoFilter showCompleted={showCompleted} onToggle={toggle} />;
}

function TodoListContainer() {
  const [, setTodos] = useAtom(todosAtom);
  const [visibleTodos] = useAtom(visibleTodosAtom);
  const toggle = ({ id }: Todo) => setTodos(todos => pureToggleTodo(todos, id));
  return <TodoList todos={visibleTodos} onToggle={toggle} />;
}
