import { useCart } from '@/context';

export type SummaryProps = {};

const Summary: React.FC<SummaryProps> = () => {
  const { cart } = useCart();

  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-black">My Order</h1>
      <p className="text-lg my-5">
        Here you can see the summary and the total amount of your order
      </p>

      <div className="py-10">
        {cart.length ? (
          <p>Si hay pedidos</p>
        ) : (
          <p className="text-center text-2xl">
            You have not yet added products to your cart
          </p>
        )}
      </div>

      <p className="text-xl mt-10">Total: {''}</p>

      <button
        type="button"
        className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer mt-6"
      >
        Confirm Order
      </button>
    </aside>
  );
};

export default Summary;
