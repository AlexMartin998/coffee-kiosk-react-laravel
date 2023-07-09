import { useEffect, useReducer, useRef } from 'react';

import { products } from '@/data/products';
import { ICategory, ICategoryResponse, IProduct } from '@/interfaces';
import { KioskActionType, KioskContext, kioskReducer } from './';
import { kioskApi } from '@/api';

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

  useEffect(() => {
    isMounted.current = true;
  }, []);

  // fetch data
  useEffect(() => {
    if (!isMounted.current) return;

    getCategories();
    dispatch({ type: KioskActionType.getProducts, payload: products });
  }, []);

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
    const filteredProducts = products.length
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
