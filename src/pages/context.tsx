import React, {
  createContext,
  PropsWithChildren,
  useMemo,
  useState,
} from "react";
import AddForm from "components/AddForm";
import { Todo, Todos } from "model";
import TodoList from "components/TodoList";
import TodoLayout from "components/TodoLayout";
import { pureAddTodo, pureToggleTodo } from "utils";

type TodoContextType = [
  todos: Todos,
  addTodo: React.Dispatch<React.SetStateAction<Todos>>
];

const TodoContext = createContext<TodoContextType>([[], () => undefined]);

function useTodoContext() {
  const context = React.useContext(TodoContext);
  if (!context) {
    throw new Error(`useTodo must be used within a TodoProvider`);
  }
  return context;
}

function TodoProvider(props: PropsWithChildren<{}>) {
  const [todos, setTodos] = useState<Todos>([]);
  const value = useMemo<TodoContextType>(() => [todos, setTodos], [todos]);
  return <TodoContext.Provider value={value} {...props} />;
}

export default function Context() {
  return (
    <TodoProvider>
      <TodoLayout title="Context">
        <AddFormContainer />
        <TodoListContainer />
      </TodoLayout>
    </TodoProvider>
  );
}

function AddFormContainer() {
  const [, setTodos] = useTodoContext();
  const addTodo = (todo: Todo) => setTodos(todos => pureAddTodo(todos, todo));
  return <AddForm onAdd={addTodo} />;
}

function TodoListContainer() {
  const [todos, setTodos] = useTodoContext();
  const toggle = (id: string) => setTodos(todos => pureToggleTodo(todos, id));
  return <TodoList todos={todos} onToggle={toggle} />;
}
