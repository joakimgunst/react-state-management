interface Props {
  label: string;
  onClick(): void;
}

export default function Button({ label, onClick }: Props) {
  return (
    <button type="button" onClick={onClick}>
      {label}

      <style jsx>{`
        button {
          padding: 16px;
          background-color: #acefff;
          font-family: inherit;
          font-size: 1.5rem;
          border: 0;
          border-radius: 8px;
          box-shadow: 0 2px 0 #c2d0d4;
          outline: none;
          cursor: pointer;
        }
      `}</style>
    </button>
  );
}
