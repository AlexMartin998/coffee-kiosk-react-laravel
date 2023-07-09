import { RouterProvider } from 'react-router-dom';

import {
  AuthProvider,
  CartProvider,
  KioskProvider,
  UIProvider,
} from '@/context';
import { appRouter } from '@/router';

export type KioskAppProps = {};

const KioskApp: React.FC<KioskAppProps> = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <UIProvider>
          <KioskProvider>
            <RouterProvider router={appRouter} />
          </KioskProvider>
        </UIProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default KioskApp;
