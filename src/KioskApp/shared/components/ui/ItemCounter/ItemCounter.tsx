interface ItemCounterProps {
  currentValue: number;
  maxValue: number;

  onUpdateQuantity: (newValue: number) => void;
}

const ItemCounter: React.FC<ItemCounterProps> = ({
  currentValue,
  maxValue,
  onUpdateQuantity,
}) => {
  const addOrRemove = (value: number) => {
    const newValue = currentValue + value;
    if (newValue < 1 || newValue > maxValue) return;

    onUpdateQuantity(newValue);
  };

  return (
    <>
      <div className="flex gap-4 mt-5">
        <button type="button" onClick={() => addOrRemove(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>

        <p className="text-3xl">{currentValue}</p>

        <button type="button" onClick={() => addOrRemove(1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ItemCounter;
