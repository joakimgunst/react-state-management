import { Todo } from "model";

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  return (
    <div className="item">
      <input type="checkbox" checked={todo.completed} disabled />
      <span className="text">{todo.text}</span>

      <style jsx>{`
        .item {
          display: flex;
          align-items: center;
          column-gap: 16px;
          padding: 16px;
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
        }

        .text {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
}
