import { UIState } from './';

type UIAction =
  | { type: UIActionType.openProductModal }
  | { type: UIActionType.closeProductModal };

export enum UIActionType {
  openProductModal = '[UI] - Open Product Modal',
  closeProductModal = '[UI] - Close Product Modal',
}

export const uiReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case UIActionType.openProductModal:
      return { ...state, isProductModalOpen: true };
    case UIActionType.closeProductModal:
      return { ...state, isProductModalOpen: false };

    default:
      return state;
  }
};
