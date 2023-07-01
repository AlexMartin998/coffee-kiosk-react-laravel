import { RouterProvider } from 'react-router-dom';

import { appRouter } from '@/router';

export type KioskAppProps = {};

const KioskApp: React.FC<KioskAppProps> = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default KioskApp;
