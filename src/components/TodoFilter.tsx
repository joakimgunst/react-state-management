interface Props {
  showCompleted: boolean;
  onToggle(): void;
}

export default function TodoFilter({ showCompleted, onToggle }: Props) {
  return (
    <label>
      <input type="checkbox" checked={showCompleted} onChange={onToggle} />
      <span>Show completed</span>

      <style jsx>{`
        label {
          display: flex;
          align-items: center;
          column-gap: 8px;
        }

        input {
          width: 18px;
          height: 18px;
        }
      `}</style>
    </label>
  );
}
