import { Link } from 'react-router-dom';

export type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <>
      <h1 className="text-4xl font-black">Log in</h1>
      <p>To create an order you must log in</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="text-slate-800">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your Email"
              className="mt-2 w-full p-3 bg-gray-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-slate-800">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              className="mt-2 w-full p-3 bg-gray-50"
            />
          </div>

          <input
            type="submit"
            name="signup"
            value="Log in"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          />
        </form>
      </div>

      <nav className="mt-5">
        <Link
          to="/auth/register"
          className="block text-center my-5 text-slate-500 text-sm"
        >
          Don't have an account? <span>Sign up</span>
        </Link>
      </nav>
    </>
  );
};

export default LoginPage;
