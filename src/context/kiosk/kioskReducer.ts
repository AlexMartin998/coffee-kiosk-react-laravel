import { ICategory } from '@/interfaces';
import { KioskState } from './';

type KioskAction = {
  type: KioskActionType.getCategories;
  payload: ICategory[];
};

export enum KioskActionType {
  getCategories = '[Kiosk] - Fetch Categories',
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

    default:
      return state;
  }
};
