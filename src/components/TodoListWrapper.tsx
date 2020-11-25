import { AnimatePresence } from "framer-motion";
import { PropsWithChildren } from "react";

export default function TodoListWrapper({ children }: PropsWithChildren<{}>) {
  return (
    <div className="list">
      <AnimatePresence initial={false}>{children}</AnimatePresence>

      <style jsx>{`
        .list {
          display: grid;
          gap: 8px;
        }
      `}</style>
    </div>
  );
}
