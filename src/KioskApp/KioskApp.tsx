import { RouterProvider } from 'react-router-dom';

import { KioskProvider, UIProvider } from '@/context';
import { appRouter } from '@/router';

export type KioskAppProps = {};

const KioskApp: React.FC<KioskAppProps> = () => {
  return (
    <UIProvider>
      <KioskProvider>
        <RouterProvider router={appRouter} />
      </KioskProvider>
    </UIProvider>
  );
};

export default KioskApp;
