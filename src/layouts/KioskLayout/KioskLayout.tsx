import { Outlet } from 'react-router-dom';

import { ProductModal } from '@/KioskApp/components';
import { Sidebar, Summary } from '../shared';

export interface KioskLayoutProps {}

const KioskLayout: React.FC<KioskLayoutProps> = () => {
  return (
    <div className="md:flex">
      <ProductModal />

      <Sidebar />
      <main className="flex-1 h-screen overflow-y-scroll p-6">
        <Outlet />
      </main>
      <Summary />
    </div>
  );
};

export default KioskLayout;
