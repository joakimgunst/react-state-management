import { AnimatePresence } from "framer-motion";
import { Todo, Todos } from "model";
import TodoItem from "./TodoItem";
import TodoListWrapper from "./TodoListWrapper";

interface Props {
  todos: Todos;
  onToggle?: (todo: Todo) => void;
  onDelete?: (todo: Todo) => void;
}

export default function TodoList({ todos, onToggle, onDelete }: Props) {
  if (todos.length === 0) return null;
  return (
    <TodoListWrapper>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </TodoListWrapper>
  );
}
