import { useKiosk } from '@/context';
import { Category } from './components';

export type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  const { categories } = useKiosk();

  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img src="img/logo.svg" alt="Logo image" className="w-40" />
      </div>

      <div className="mt-10">
        {categories.map(category => (
          <Category key={category.id} category={category} />
        ))}
      </div>

      <div className="my-5 px-5">
        <button className="text-center bg-red-500 w-full p-3 font-bold text-white truncate">
          Cancel Order
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
