import { useKiosk } from '@/context';
import { ICategory } from '@/interfaces';

interface CategoryProps {
  category: ICategory;
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  const { activeCategory, setActiveCategory, filterProductsByCategoryId } =
    useKiosk();
  const { icon, name, id } = category;

  const onClickCategory = () => {
    setActiveCategory(category);
    filterProductsByCategoryId(id);
  };

  return (
    <div
      className={`flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer ${
        activeCategory.id === id && 'bg-amber-400'
      }`}
      onClick={onClickCategory}
    >
      <img
        src={`/img/icono_${icon}.svg`}
        alt="Category icon"
        className="w-12"
      />

      <p className="text-lg font-bold cursor-pointer truncate">{name}</p>
    </div>
  );
};

export default Category;
