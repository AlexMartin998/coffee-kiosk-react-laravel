import { categories } from '@/data/categories';

export type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img src="img/logo.svg" alt="Logo image" className="w-40" />
      </div>
      <div className="mt-10">
        {categories.map(category => (
          <p key={category.id}>{category.name}</p>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
