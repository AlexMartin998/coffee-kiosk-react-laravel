import { formattingMoney } from '@/shared/helpers';

export interface TotalOrderSummaryProps {
  totalAmount: number;
}

const TotalOrderSummary: React.FC<TotalOrderSummaryProps> = ({
  totalAmount,
}) => {
  return (
    <>
      <p className="text-xl mt-10">Total: {formattingMoney(totalAmount)}</p>

      <button
        type="button"
        className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer mt-6"
      >
        Confirm Order
      </button>
    </>
  );
};

export default TotalOrderSummary;
