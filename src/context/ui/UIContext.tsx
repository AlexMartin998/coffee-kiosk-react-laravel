import { createContext } from 'react';

interface UIContextProps {
  isProductModalOpen: boolean;

  openProductModal: () => void;
  closeProductModal: () => void;
}

export const UIContext = createContext({} as UIContextProps);
