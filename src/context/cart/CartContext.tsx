import { createContext } from 'react';

import { ICartProduct } from '@/interfaces';

interface CartContextProps {
  cart: ICartProduct[];
  activeProductInCart: ICartProduct;

  addProductToCart: (product: ICartProduct) => void;
  updateCartQuantity: (product: ICartProduct) => void;

  setActiveProductInCart: (product: ICartProduct) => void;
}

export const CartContext = createContext({} as CartContextProps);
