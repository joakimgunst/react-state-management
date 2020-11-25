import React from "react";
import {
  atom,
  atomFamily,
  RecoilRoot,
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { Todo } from "model";
import TodoLayout from "components/TodoLayout";
import AddForm from "components/AddForm";
import TodoListWrapper from "components/TodoListWrapper";
import TodoItem from "components/TodoItem";

const todoIdsState = atom({
  key: "af-todos",
  default: [] as string[],
});

const todoState = atomFamily({
  key: "af-todo",
  default: {} as Todo,
});

export default function Page() {
  return (
    <RecoilRoot>
      <TodoLayout title="Recoil (atom family)">
        <AddFormContainer />
        <TodoListContainer />
      </TodoLayout>
    </RecoilRoot>
  );
}

function AddFormContainer() {
  const addTodo = useRecoilCallback(({ set }) => (todo: Todo) => {
    set(todoIdsState, ids => [...ids, todo.id]);
    set(todoState(todo.id), todo);
  });

  return <AddForm onAdd={addTodo} />;
}

function TodoListContainer() {
  const todoIds = useRecoilValue(todoIdsState);

  if (todoIds.length === 0) return null;

  return (
    <TodoListWrapper>
      {todoIds.map(id => (
        <TodoContainer key={id} id={id} />
      ))}
    </TodoListWrapper>
  );
}

interface TodoContainerProps {
  id: string;
}

function TodoContainer({ id }: TodoContainerProps) {
  const [todo, setTodo] = useRecoilState(todoState(id));

  const toggle = () => {
    setTodo(todo => ({ ...todo, completed: !todo.completed }));
  };

  return <TodoItem todo={todo} onToggle={toggle} />;
}
