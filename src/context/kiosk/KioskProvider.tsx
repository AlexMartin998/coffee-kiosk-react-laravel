import { useEffect, useReducer, useRef } from 'react';

import { kioskApi } from '@/api';
import {
  ICategory,
  ICategoryResponse,
  IProduct,
  IProductResponse,
} from '@/interfaces';
import useSWR from 'swr';
import { KioskActionType, KioskContext, kioskReducer } from './';

interface KioskProviderProps {
  children: React.ReactNode;
}

export interface KioskState {
  categories: ICategory[];
  activeCategory: ICategory;
  isLoadingCategories: boolean;
  products: IProduct[];
  activeProduct: IProduct;
  filteredProducts: IProduct[];
  isLoadingProducts: boolean;
}

const KIOSK_INIT_STATE: KioskState = {
  categories: [],
  activeCategory: {} as ICategory,
  isLoadingCategories: true,
  products: [],
  activeProduct: {} as IProduct,
  filteredProducts: [],
  isLoadingProducts: true,
};

export const KioskProvider = ({ children }: KioskProviderProps) => {
  const [state, dispatch] = useReducer(kioskReducer, KIOSK_INIT_STATE);
  const isMounted = useRef(false);

  const productsFetcher = (url: string) =>
    kioskApi<IProductResponse>(url).then(data => data.data.data);
  const { data: products } = useSWR('/products', productsFetcher, {
    refreshInterval: 1000 * 15,
  });

  useEffect(() => {
    isMounted.current = true;
  }, []);

  // fetch data
  useEffect(() => {
    if (!isMounted.current) return;

    getCategories();

    if (!products?.length) return;
    dispatch({ type: KioskActionType.getProducts, payload: products });
  }, [products]);

  const getCategories = async () => {
    try {
      const { data } = await kioskApi.get<ICategoryResponse>('/categories');
      const categories: ICategory[] = data.data;

      dispatch({ type: KioskActionType.getCategories, payload: categories });
    } catch (error) {
      console.log(error);
    }
  };

  const setActiveCategory = (category: ICategory) => {
    dispatch({ type: KioskActionType.setActiveCategory, payload: category });
  };

  const filterProductsByCategoryId = (categoryId: number) => {
    const filteredProducts =
      products && products.length
        ? products.filter(product => product.category_id === categoryId)
        : [];

    dispatch({
      type: KioskActionType.filterProductsByCategory,
      payload: filteredProducts,
    });
  };

  // // Products
  const setActiveProduct = (product: IProduct) => {
    dispatch({ type: KioskActionType.setActiveProduct, payload: product });
  };

  return (
    <KioskContext.Provider
      value={{
        ...state,
        isMounted,

        // fn()
        setActiveCategory,
        filterProductsByCategoryId,
        setActiveProduct,
      }}
    >
      {children}
    </KioskContext.Provider>
  );
};
