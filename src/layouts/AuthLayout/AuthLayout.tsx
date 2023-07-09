import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface AuthLayoutProps {}

const AuthLayout: React.FC<AuthLayoutProps> = () => {
  return (
    <main className="max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center">
      <img src="../img/logo.svg" alt="Logo image" className="max-w-xs" />

      <div className="p-10 w-full">
        <Outlet />
      </div>

      <ToastContainer />
    </main>
  );
};

export default AuthLayout;
