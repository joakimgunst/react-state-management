import { motion } from "framer-motion";
import { Todo } from "model";

interface Props {
  todo: Todo;
  onToggle?: (todo: Todo) => void;
  onDelete?: (todo: Todo) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: todo.completed ? 0.5 : 1 }}
      exit={{ opacity: 0 }}
      layout
    >
      <div className="item">
        {onToggle && (
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo)}
          />
        )}
        <span className="text">{todo.text}</span>
        {onDelete && (
          <a className="delete" tabIndex={0} onClick={() => onDelete(todo)}>
            Delete
          </a>
        )}

        <style jsx>{`
          .item {
            display: flex;
            align-items: center;
            column-gap: 8px;
            padding: 16px;
            background: #f5f5f5;
            border-radius: 8px;
            overflow: hidden;
          }

          input {
            width: 18px;
            height: 18px;
          }

          .text {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-right: auto;
          }

          .delete {
            padding: 2px;
            margin-left: 8px;
            color: #b53535;
            cursor: pointer;
          }
        `}</style>
      </div>
    </motion.div>
  );
}
