import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@/KioskApp/pages';
import { LoginPage } from '@/auth/pages';
import { AuthLayout, KioskLayout } from '@/layouts';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <KioskLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [{ index: true, element: <LoginPage /> }],
  },
]);

export default appRouter;
