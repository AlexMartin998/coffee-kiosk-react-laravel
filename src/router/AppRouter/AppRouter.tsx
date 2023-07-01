import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@/KioskApp/pages';
import { LoginPage, RegisterPage } from '@/auth/pages';
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
    children: [
      { path: '/auth/login', element: <LoginPage /> },
      { path: '/auth/register', element: <RegisterPage /> },
    ],
  },
]);

export default appRouter;
