import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from '../services/axios';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/auth/login', data);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='max-w-md mx-auto py-12 px-5'>
      <h1 className='text-center font-bold text-xl py-4 text-gray-500'>
        LOGIN
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='py-4 px-4 rounded-lg shadow'
      >
        <div className='flex flex-col py-3 px-4'>
          <label htmlFor='email' className='text-md py-2'>
            Enter your email
          </label>
          <input
            {...register('email', { required: true })}
            type='email'
            name='email'
            placeholder='Enter your email...'
            autoFocus
            autoComplete='email'
            className='w-full p-2 border border-gray-300 rounded-lg'
          />
        </div>
        <div className='flex flex-col py-3 px-4'>
          <label htmlFor='password' className='text-md py-2'>
            Choose your password
          </label>
          <input
            {...register('password', { required: true })}
            type='password'
            name='password'
            placeholder='Enter your password...'
            autoComplete='password'
            className='w-full p-2 border border-gray-300 rounded-lg'
          />
        </div>
        <div className='flex flex-col items-end py-3 px-4'>
          <button
            type='submit'
            className='py-2 px-4 rounded-lg bg-slate-800 text-slate-100 font-bold text-sm hover:bg-slate-700 hover:text-slate-200 transition delay-100'
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
