import { Todo } from "model";
import { nanoid } from "nanoid";
import { FormEvent, useState } from "react";

interface Props {
  onAdd(todo: Todo): void;
}

export default function AddForm({ onAdd }: Props) {
  const [value, setValue] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (value) {
      onAdd({ id: nanoid(8), text: value });
      setValue("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        autoFocus
        placeholder="Enter todo"
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit" disabled={!value}>
        Add todo
      </button>

      <style jsx>{`
        form {
          display: grid;
          grid-template-columns: 1fr auto;
          column-gap: 24px;
        }

        input {
          padding: 16px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-family: inherit;
          font-size: inherit;
          min-width: 80px;
        }

        button {
          padding: 16px;
          background-color: #acefff;
          font-family: inherit;
          font-size: inherit;
          border: 0;
          border-radius: 8px;
          box-shadow: 0 2px 0 #c2d0d4;
          cursor: pointer;
        }

        button:disabled {
          cursor: not-allowed;
        }
      `}</style>
    </form>
  );
}
