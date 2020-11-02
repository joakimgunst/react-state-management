interface Props {
  value: number;
}

export default function Counter({ value }: Props) {
  return (
    <div className="counter">
      {value}

      <style jsx>{`
        .counter {
          padding: 16px;
          background-color: #aff8db;
          font-size: 2rem;
          border-radius: 8px;
          min-width: 92px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
