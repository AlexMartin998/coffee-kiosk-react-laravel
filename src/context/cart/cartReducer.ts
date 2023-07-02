import { ICartProduct } from '@/interfaces';
import { CartState } from './';

type cartAction =
  | {
      type: CartActionType.loadCartFromLocalStorage;
      payload: ICartProduct[];
    }
  | { type: CartActionType.updateProductsInCart; payload: ICartProduct[] };

export enum CartActionType {
  loadCartFromLocalStorage = '[Cart] - Load Cart from Local Storage',
  updateProductsInCart = '[Cart] - Update products in cart',
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

    default:
      return state;
  }
};
