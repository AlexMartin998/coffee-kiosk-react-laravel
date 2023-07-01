import { createBrowserRouter } from 'react-router-dom';

import { KioskLayout } from '@/layouts';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <KioskLayout />,
  },
]);

export default appRouter;
