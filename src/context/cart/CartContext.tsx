import { createContext } from 'react';

import { ICartProduct, IOrderSummary } from '@/interfaces';

interface CartContextProps {
  cart: ICartProduct[];
  activeProductInCart: ICartProduct;
  orderSummary: IOrderSummary;

  addProductToCart: (product: ICartProduct) => void;
  updateCartQuantity: (product: ICartProduct) => void;
  removeProductFromCart: (product: ICartProduct) => void;

  setActiveProductInCart: (product: ICartProduct) => void;
}

export const CartContext = createContext({} as CartContextProps);
