import useSWR from 'swr';

import { kioskApi } from '@/api';
import { useKiosk } from '@/context';
import { IProductResponse } from '@/interfaces';
import { Product } from '..';

export type ProductListProps = {};

const ProductList: React.FC<ProductListProps> = () => {
  // const { products, isLoadingProducts, filteredProducts } = useKiosk(); // without wsr
  const { filteredProducts } = useKiosk();

  const fetcher = (url: string) =>
    kioskApi<IProductResponse>(url).then(data => data.data.data);
  const { data, isLoading } = useSWR('/products', fetcher, {
    refreshInterval: 1000 * 30,
  });

  if (!data?.length || isLoading) return <></>;
  


  const productsToThrough = filteredProducts.length ? filteredProducts : data;

  return (
    <>
      {isLoading ? (
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
