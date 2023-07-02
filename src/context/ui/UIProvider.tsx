import { useReducer } from 'react';
import { UIActionType, UIContext, uiReducer } from './';

export interface UIState {
  isProductModalOpen: boolean;
}

interface UIProviderProps {
  children: React.ReactNode;
}

const UI_INIT_STATE: UIState = {
  isProductModalOpen: false,
};

export const UIProvider = ({ children }: UIProviderProps) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INIT_STATE);

  const openProductModal = () =>
    dispatch({ type: UIActionType.openProductModal });
  const closeProductModal = () =>
    dispatch({ type: UIActionType.closeProductModal });

  return (
    <UIContext.Provider
      value={{ ...state, openProductModal, closeProductModal }}
    >
      {children}
    </UIContext.Provider>
  );
};
