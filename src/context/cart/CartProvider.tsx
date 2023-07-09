import { useEffect, useReducer } from 'react';
import { toast } from 'react-toastify';

import { ICartProduct, IOrderSummary } from '@/interfaces';
import { CartActionType, CartContext, cartReducer } from './';

export interface CartState {
  cart: ICartProduct[];
  activeProductInCart: ICartProduct;
  orderSummary: IOrderSummary;
}

interface CartProviderProps {
  children: React.ReactNode;
}

const CART_INIT_STATE: CartState = {
  cart: [],
  activeProductInCart: {} as ICartProduct,
  orderSummary: {
    numberOfItems: 0,
    subTotal: 0,
    tax: 0,
    total: 0,
  },
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INIT_STATE);

  // // orderSummary
  useEffect(() => {
    const subTotal = state.cart.reduce(
      (acc, { price, quantity }) => acc + price * quantity,
      0
    );
    const taxRate = 0.12;
    const tax = subTotal * taxRate;

    const orderSummary: IOrderSummary = {
      numberOfItems: state.cart.reduce(
        (acc, itemInCart) => acc + itemInCart.quantity,
        0
      ),
      subTotal,
      tax,
      total: subTotal + tax,
    };

    dispatch({
      type: CartActionType.updateOrderSummary,
      payload: orderSummary,
    });
  }, [state.cart]);

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

    toast.success('Product Added');
  };

  const setActiveProductInCart = (product: ICartProduct) => {
    dispatch({ type: CartActionType.setActiveProductInCart, payload: product });
  };

  const updateCartQuantity = (product: ICartProduct) => {
    dispatch({ type: CartActionType.updateCartQuantity, payload: product });
  };

  const removeProductFromCart = (product: ICartProduct) => {
    dispatch({ type: CartActionType.removeProductoFromCart, payload: product });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addProductToCart,
        setActiveProductInCart,
        updateCartQuantity,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
