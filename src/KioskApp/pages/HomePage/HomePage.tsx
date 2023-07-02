import { ProductList } from './components';

export type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <h1 className="text-4xl font-black">Home</h1>
      <p className="text-2xl my-10">Choose and customize your order</p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <ProductList />
      </div>
    </>
  );
};

export default HomePage;
