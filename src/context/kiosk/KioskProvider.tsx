import { useEffect, useReducer, useRef } from 'react';

import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { ICategory, IProduct } from '@/interfaces';
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

  useEffect(() => {
    isMounted.current = true;
  }, []);

  // fetch data
  useEffect(() => {
    if (!isMounted.current) return;
    dispatch({ type: KioskActionType.getCategories, payload: categories });
    dispatch({ type: KioskActionType.getProducts, payload: products });
  }, []);

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

  return (
    <KioskContext.Provider
      value={{
        ...state,
        isMounted,

        // fn()
        setActiveCategory,
        filterProductsByCategoryId,
      }}
    >
      {children}
    </KioskContext.Provider>
  );
};
