import { createContext } from 'react';

import { ICategory } from '@/interfaces';

interface KioskContextProps {
  categories: ICategory[];
  activeCategory: ICategory;
  isMounted: React.MutableRefObject<boolean>;
  isLoadingCategories: boolean;

  setActiveCategory: (category: ICategory) => void;
}

export const KioskContext = createContext({} as KioskContextProps);
