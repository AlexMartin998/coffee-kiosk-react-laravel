import { IProduct } from '@/interfaces';

export type ProductProps = {
  product: IProduct;
};

const Product: React.FC<ProductProps> = ({ product }) => {
  const { name, image, price } = product;

  return (
    <div className="border p-3 shadow bg-white">
      <img src={`/img/${image}.jpg`} alt={`${name} image`} className="w-full" />

      <div className="p-5">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">{price}</p>
      </div>
    </div>
  );
};

export default Product;
