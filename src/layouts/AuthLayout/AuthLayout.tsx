import { Outlet } from 'react-router-dom';

export interface AuthLayoutProps {}

const AuthLayout: React.FC<AuthLayoutProps> = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
