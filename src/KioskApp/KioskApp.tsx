import { RouterProvider } from 'react-router-dom';

import { CartProvider, KioskProvider, UIProvider } from '@/context';
import { appRouter } from '@/router';

export type KioskAppProps = {};

const KioskApp: React.FC<KioskAppProps> = () => {
  return (
    <CartProvider>
      <UIProvider>
        <KioskProvider>
          <RouterProvider router={appRouter} />
        </KioskProvider>
      </UIProvider>
    </CartProvider>
  );
};

export default KioskApp;
