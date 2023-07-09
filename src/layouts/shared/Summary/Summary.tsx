import { useCart } from '@/context';
import { CartList, TotalOrderSummary } from './components';

export type SummaryProps = {};

const Summary: React.FC<SummaryProps> = () => {
  const { cart, orderSummary } = useCart();

  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-black">My Order</h1>
      <p className="text-lg my-5">
        Here you can see the summary and the total amount of your order
      </p>

      <div className="py-10">
        {cart.length ? (
          <CartList cart={cart} />
        ) : (
          <p className="text-center text-2xl">
            You have not yet added products to your cart
          </p>
        )}
      </div>

      {!!orderSummary.total && (
        <TotalOrderSummary totalAmount={orderSummary.total} />
      )}
    </aside>
  );
};

export default Summary;
