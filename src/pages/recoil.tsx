import React from "react";
import {
  atom,
  RecoilRoot,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { Todo, Todos } from "model";
import TodoLayout from "components/TodoLayout";
import AddForm from "components/AddForm";
import TodoFilter from "components/TodoFilter";
import TodoList from "components/TodoList";
import { pureAddTodo, pureToggleTodo } from "utils";

const todosState = atom({
  key: "todos",
  default: [] as Todos,
});

const showCompletedState = atom({
  key: "showCompleted",
  default: false,
});

const visibleTodosState = selector({
  key: "visibleTodos",
  get: ({ get }) => {
    const todos = get(todosState);
    const showCompleted = get(showCompletedState);
    return todos.filter(t => t.completed === showCompleted);
  },
});

export default function Page() {
  return (
    <RecoilRoot>
      <TodoLayout title="Recoil">
        <AddFormContainer />
        <TodoFilterContainer />
        <TodoListContainer />
      </TodoLayout>
    </RecoilRoot>
  );
}

function AddFormContainer() {
  const setTodos = useSetRecoilState(todosState);
  const addTodo = (todo: Todo) => setTodos(todos => pureAddTodo(todos, todo));
  return <AddForm onAdd={addTodo} />;
}

function TodoFilterContainer() {
  const [showCompleted, setShowCompleted] = useRecoilState(showCompletedState);
  const toggle = () => setShowCompleted(value => !value);
  return <TodoFilter showCompleted={showCompleted} onToggle={toggle} />;
}

function TodoListContainer() {
  const setTodos = useSetRecoilState(todosState);
  const visibleTodos = useRecoilValue(visibleTodosState);
  const toggle = (id: string) => setTodos(todos => pureToggleTodo(todos, id));
  return <TodoList todos={visibleTodos} onToggle={toggle} />;
}
