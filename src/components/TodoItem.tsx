import { motion } from "framer-motion";
import { Todo } from "model";

interface Props {
  todo: Todo;
  onToggle(todo: Todo): void;
}

export default function TodoItem({ todo, onToggle }: Props) {
  function toggle() {
    onToggle(todo);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: todo.completed ? 0.5 : 1 }}
      exit={{ opacity: 0 }}
      layout
    >
      <div className="item">
        <input type="checkbox" checked={todo.completed} onChange={toggle} />
        <span className="text">{todo.text}</span>

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
          }
        `}</style>
      </div>
    </motion.div>
  );
}
