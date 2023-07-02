import { useKiosk } from '@/context';
import { Product } from '..';

export type ProductListProps = {};

const ProductList: React.FC<ProductListProps> = () => {
  const { products, isLoadingProducts, filteredProducts } = useKiosk();

  const productsToThrough = filteredProducts.length
    ? filteredProducts
    : products;

  return (
    <>
      {isLoadingProducts ? (
        <p>Loading...</p>
      ) : (
        productsToThrough.map(product => (
          <Product key={product.id} product={product} />
        ))
      )}
    </>
  );
};

export default ProductList;
