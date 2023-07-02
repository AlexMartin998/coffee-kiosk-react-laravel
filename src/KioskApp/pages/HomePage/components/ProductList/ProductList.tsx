import { useKiosk } from '@/context';
import { Product } from '..';

export type ProductListProps = {};

const ProductList: React.FC<ProductListProps> = () => {
  const { products, isLoadingProducts } = useKiosk();

  return (
    <>
      {isLoadingProducts ? (
        <p>Loading...</p>
      ) : (
        products.map(product => <Product key={product.id} product={product} />)
      )}
    </>
  );
};

export default ProductList;
