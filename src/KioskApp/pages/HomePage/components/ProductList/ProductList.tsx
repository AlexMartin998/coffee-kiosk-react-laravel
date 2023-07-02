import { products } from '@/data/products';
import { Product } from '..';

export type ProductListProps = {};

const ProductList: React.FC<ProductListProps> = () => {
  return (
    <>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductList;
