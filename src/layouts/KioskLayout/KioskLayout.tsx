import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ProductModal } from '@/KioskApp/shared/components';
import { Sidebar, Summary } from '../shared';

export interface KioskLayoutProps {}

const KioskLayout: React.FC<KioskLayoutProps> = () => {
  return (
    <div className="md:flex">
      <Sidebar />

      <main className="flex-1 h-screen overflow-y-scroll p-6">
        <Outlet />
      </main>

      <Summary />

      <ProductModal />
      <ToastContainer />
    </div>
  );
};

export default KioskLayout;
