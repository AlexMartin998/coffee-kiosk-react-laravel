import { useReducer } from 'react';

import { ICartProduct } from '@/interfaces';
import { CartActionType, CartContext, cartReducer } from './';

export interface CartState {
  cart: ICartProduct[];
  activeProductInCart: ICartProduct;
}

interface CartProviderProps {
  children: React.ReactNode;
}

const CART_INIT_STATE: CartState = {
  cart: [],
  activeProductInCart: {} as ICartProduct,
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INIT_STATE);

  const addProductToCart = (productToAdd: ICartProduct) => {
    const updatedProductCart = [...state.cart];
    const foundProduct = updatedProductCart.find(
      ({ id }) => id === productToAdd.id
    );

    if (foundProduct) foundProduct.quantity += productToAdd.quantity;
    else updatedProductCart.push(productToAdd);

    dispatch({
      type: CartActionType.updateProductsInCart,
      payload: [...updatedProductCart],
    });
  };

  const setActiveProductInCart = (product: ICartProduct) => {
    dispatch({ type: CartActionType.setActiveProductInCart, payload: product });
  };

  const updateCartQuantity = (product: ICartProduct) => {
    dispatch({ type: CartActionType.updateCartQuantity, payload: product });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addProductToCart,
        setActiveProductInCart,
        updateCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
