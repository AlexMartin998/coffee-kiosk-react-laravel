import { Outlet } from 'react-router-dom';

import { Sidebar, Summary } from '../shared';

export interface KioskLayoutProps {}

const KioskLayout: React.FC<KioskLayoutProps> = () => {
  return (
    <div className="md:flex">
      <Sidebar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Summary />
    </div>
  );
};

export default KioskLayout;
