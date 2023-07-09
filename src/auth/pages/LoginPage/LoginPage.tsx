import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormErrorText } from '@/shared/components';
import { loginFormSchema } from '@/shared/utils';

type FormData = {
  email: string;
  password: string;
};

export type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = () => {
  // const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(loginFormSchema) });

  const handleRegister = async ({ email, password }: FormData) => {
    // const { hasError, message } = await registerUser(name,email,password,password2);
    console.log({ email, password });
  };

  return (
    <>
      <h1 className="text-4xl font-black">Log in</h1>
      <p>To create an order you must log in</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form onSubmit={handleSubmit(handleRegister)} noValidate>
          <div className="mb-4">
            <label htmlFor="email" className="text-slate-800">
              Email:
            </label>
            <input
              type="text"
              id="email"
              placeholder="Your Email"
              className="mt-2 w-full p-3 bg-gray-50"
              {...register('email')}
            />
            <FormErrorText errorMessage={errors.email?.message ?? ''} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-slate-800">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your Password"
              className="mt-2 w-full p-3 bg-gray-50"
              {...register('password')}
            />
            <FormErrorText errorMessage={errors.password?.message ?? ''} />
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
          Don&apos;t have an account?{' '}
          <span className="font-bold text-indigo-500">Sign up</span>
        </Link>
      </nav>
    </>
  );
};

export default LoginPage;
