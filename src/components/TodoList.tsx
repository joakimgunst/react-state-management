import { AnimatePresence } from "framer-motion";
import { Todo, Todos } from "model";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todos;
  onToggle?: (todo: Todo) => void;
  onDelete?: (todo: Todo) => void;
}

export default function TodoList({ todos, onToggle, onDelete }: Props) {
  return (
    <div className="list">
      <AnimatePresence initial={false}>
        {Object.values(todos).map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </AnimatePresence>

      <style jsx>{`
        .list {
          display: grid;
          gap: 8px;
        }
      `}</style>
    </div>
  );
}
