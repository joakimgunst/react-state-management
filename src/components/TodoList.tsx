import { Todo } from "model";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
}

export default function TodoList({ todos }: Props) {
  return (
    <div className="list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}

      <style jsx>{`
        .list {
          display: grid;
          gap: 8px;
        }
      `}</style>
    </div>
  );
}
