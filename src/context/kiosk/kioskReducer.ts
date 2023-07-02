import { ICategory, IProduct } from '@/interfaces';
import { KioskState } from './';

type KioskAction =
  | {
      type: KioskActionType.getCategories;
      payload: ICategory[];
    }
  | { type: KioskActionType.setActiveCategory; payload: ICategory }
  | { type: KioskActionType.getProducts; payload: IProduct[] }
  | { type: KioskActionType.setActiveProduct; payload: IProduct };

export enum KioskActionType {
  getCategories = '[Kiosk] - Fetch Categories',
  setActiveCategory = '[Kiosk] - Set Active Category',
  getProducts = '[Kiosk] - Fetch Products',
  setActiveProduct = '[Kiosk] - Set Active Product',
}

export const kioskReducer = (
  state: KioskState,
  action: KioskAction
): KioskState => {
  switch (action.type) {
    case KioskActionType.getCategories:
      return {
        ...state,
        categories: action.payload,
        isLoadingCategories: false,
      };

    case KioskActionType.setActiveCategory:
      return { ...state, activeCategory: action.payload };

    case KioskActionType.getProducts:
      return { ...state, products: action.payload, isLoadingProducts: false };

    default:
      return state;
  }
};
