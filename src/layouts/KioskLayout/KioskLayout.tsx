import { Outlet } from 'react-router-dom';

export interface KioskLayoutProps {}

const KioskLayout: React.FC<KioskLayoutProps> = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default KioskLayout;
