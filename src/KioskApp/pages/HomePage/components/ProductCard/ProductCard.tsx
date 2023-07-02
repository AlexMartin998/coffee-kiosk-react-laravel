import { IProduct } from '@/interfaces';
import { formattingMoney } from '@/shared/helpers';

export type ProductProps = {
  product: IProduct;
};

const Product: React.FC<ProductProps> = ({ product }) => {
  const { name, image, price } = product;
  const formattedPrice = formattingMoney(+price);

  return (
    <div className="border p-3 shadow bg-white">
      <img src={`/img/${image}.jpg`} alt={`${name} image`} className="w-full" />

      <div className="p-5 flex-column content-between">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formattedPrice}
        </p>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Product;
