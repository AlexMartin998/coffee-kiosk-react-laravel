import { ICartProduct } from '@/interfaces';
import { CartState } from './';

type cartAction =
  | {
      type: CartActionType.loadCartFromLocalStorage;
      payload: ICartProduct[];
    }
  | { type: CartActionType.updateProductsInCart; payload: ICartProduct[] }
  | { type: CartActionType.updateCartQuantity; payload: ICartProduct }
  | { type: CartActionType.removeProductoFromCart; payload: ICartProduct }
  | { type: CartActionType.setActiveProductInCart; payload: ICartProduct };

export enum CartActionType {
  loadCartFromLocalStorage = '[Cart] - Load Cart from Local Storage',
  updateProductsInCart = '[Cart] - Update products in cart',
  updateCartQuantity = '[Cart] - Update product quantity in cart',
  removeProductoFromCart = '[Cart] - Remove product from cart',

  setActiveProductInCart = '[Cart] - Set active product in cart',
}

export const cartReducer = (
  state: CartState,
  action: cartAction
): CartState => {
  switch (action.type) {
    case CartActionType.loadCartFromLocalStorage:
      return { ...state, cart: [...action.payload] };

    case CartActionType.updateProductsInCart:
      return { ...state, cart: action.payload };

    case CartActionType.setActiveProductInCart:
      return { ...state, activeProductInCart: action.payload };

    case CartActionType.updateCartQuantity:
      return {
        ...state,

        // // true -> return updated product
        cart: state.cart.map(product =>
          product.id === action.payload.id ? action.payload : product
        ),
      };

    case CartActionType.removeProductoFromCart:
      return {
        ...state,
        cart: state.cart.filter(p => !(p.id === action.payload.id)),
      };

    default:
      return state;
  }
};
