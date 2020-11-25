import { Todo } from "model";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  onAdd(todo: Todo): void;
}

interface FormState {
  text: string;
}

export default function AddForm({ onAdd }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<FormState>();

  const onSubmit: SubmitHandler<FormState> = ({ text }) => {
    onAdd({ id: nanoid(8), text: text, completed: false });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="text"
        ref={register({ required: true })}
        placeholder="Enter todo"
        autoComplete="off"
        autoFocus
      />
      <button type="submit">Add todo</button>

      <style jsx>{`
        form {
          display: grid;
          grid-template-columns: 1fr auto;
          column-gap: 24px;
        }

        input {
          padding: 16px;
          border-radius: 8px;
          border: 1px solid #bbb;
          font-family: inherit;
          font-size: inherit;
          min-width: 80px;
        }

        input:focus {
          outline: none;
          border-color: #777;
        }

        button {
          padding: 16px;
          background-color: #acefff;
          font-family: inherit;
          font-size: inherit;
          border: 0;
          border-radius: 8px;
          box-shadow: 0 2px 0 #c2d0d4;
          transition: background 0.2s;
          cursor: pointer;
        }

        button:hover {
          background-color: #bcf2ff;
        }

        button:active {
          background-color: #80e0f7;
        }
      `}</style>
    </form>
  );
}
