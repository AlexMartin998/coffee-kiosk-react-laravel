import { createContext } from 'react';

import { ICategory } from '@/interfaces';

interface KioskContextProps {
  categories: ICategory[];
  isMounted: React.MutableRefObject<boolean>;
}

export const KioskContext = createContext({} as KioskContextProps);
