import { useEffect, useReducer, useRef } from 'react';

import { categories } from '@/data/categories';
import { ICategory } from '@/interfaces';
import { KioskActionType, KioskContext, kioskReducer } from './';

interface KioskProviderProps {
  children: React.ReactNode;
}

export interface KioskState {
  categories: ICategory[];
  isLoadingCategories: boolean;
  activeCategory: ICategory;
}

const KIOSK_INIT_STATE: KioskState = {
  categories: [],
  isLoadingCategories: true,
  activeCategory: {} as ICategory,
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
  }, []);

  const setActiveCategory = (category: ICategory) => {
    dispatch({ type: KioskActionType.setActiveCategory, payload: category });
  };

  return (
    <KioskContext.Provider
      value={{
        ...state,
        isMounted,

        // fn()
        setActiveCategory,
      }}
    >
      {children}
    </KioskContext.Provider>
  );
};
