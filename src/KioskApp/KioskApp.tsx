import { RouterProvider } from 'react-router-dom';

import { appRouter } from '@/router';
import { KioskProvider } from '@/context';

export type KioskAppProps = {};

const KioskApp: React.FC<KioskAppProps> = () => {
  return (
    <KioskProvider>
      <RouterProvider router={appRouter} />
    </KioskProvider>
  );
};

export default KioskApp;
