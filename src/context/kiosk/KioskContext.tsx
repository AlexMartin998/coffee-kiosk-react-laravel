import { createContext } from 'react';

import { ICategory, IProduct } from '@/interfaces';

interface KioskContextProps {
  categories: ICategory[];
  activeCategory: ICategory;
  isLoadingCategories: boolean;

  products: IProduct[];
  activeProduct: IProduct;
  filteredProducts: IProduct[];
  isLoadingProducts: boolean;

  isMounted: React.MutableRefObject<boolean>;

  setActiveCategory: (category: ICategory) => void;
  filterProductsByCategoryId: (categoryId: number) => void;
}

export const KioskContext = createContext({} as KioskContextProps);
