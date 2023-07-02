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
}

const KIOSK_INIT_STATE: KioskState = {
  categories: [],
  isLoadingCategories: true,
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

  return (
    <KioskContext.Provider value={{ ...state, isMounted }}>
      {children}
    </KioskContext.Provider>
  );
};
