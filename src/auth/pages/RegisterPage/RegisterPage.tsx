import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { useAuth } from '@/context';
import { FormErrorText } from '@/shared/components';
import { registerFormSchema } from '@/shared/utils';

export type RegisterPageProps = {};

type FormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};
const RegisterPage: React.FC<RegisterPageProps> = () => {
  const { registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(registerFormSchema) });

  const handleRegister = async ({
    email,
    name,
    password,
    password_confirmation,
  }: FormData) => {
    await registerUser({
      name,
      email,
      password,
      password_confirmation,
    });
  };

  return (
    <>
      <h1 className="text-4xl font-black">Sign up</h1>
      <p>Create your account by filling out the form</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form onSubmit={handleSubmit(handleRegister)} noValidate>
          <div className="mb-4">
            <label htmlFor="name" className="text-slate-800">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="mt-2 w-full p-3 bg-gray-50"
              {...register('name')}
            />
            <FormErrorText errorMessage={errors.name?.message ?? ''} />
          </div>
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
          <div className="mb-4">
            <label htmlFor="password_confirmation" className="text-slate-800">
              Repeat Password:
            </label>
            <input
              type="password"
              id="password_confirmation"
              placeholder="Repeat Password"
              className="mt-2 w-full p-3 bg-gray-50"
              {...register('password_confirmation')}
            />
            <FormErrorText
              errorMessage={errors.password_confirmation?.message ?? ''}
            />
          </div>

          <input
            type="submit"
            name="signup"
            value="Sign Up"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          />
        </form>
      </div>

      <nav className="mt-5">
        <Link
          to="/auth/login"
          className="block text-center my-5 text-slate-500 text-sm"
        >
          Already have an account?{' '}
          <span className="font-bold text-indigo-500">Log in</span>
        </Link>
      </nav>
    </>
  );
};

export default RegisterPage;
