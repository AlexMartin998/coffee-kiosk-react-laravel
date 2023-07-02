import { ICategory } from '@/interfaces';
import { KioskState } from './';

type KioskAction =
  | {
      type: KioskActionType.getCategories;
      payload: ICategory[];
    }
  | { type: KioskActionType.setActiveCategory; payload: ICategory };

export enum KioskActionType {
  getCategories = '[Kiosk] - Fetch Categories',
  setActiveCategory = '[Kiosk] - Set Active Category',
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

    default:
      return state;
  }
};
