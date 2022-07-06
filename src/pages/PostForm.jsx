import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from '../services/axios';

const PostForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    formData.append('image', data.image[0]);

    await axios.post('/api/memories', formData);
    navigate('/');
  };

  return (
    <div className='max-w-md mx-auto py-12 px-5'>
      <h1 className='text-center font-bold text-xl py-4 text-gray-500'>
        CREATE A NEW MEMORY
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='py-4 px-4 rounded-lg shadow'
      >
        <div className='flex flex-col py-3 px-4'>
          <label htmlFor='title' className='text-md py-2'>
            Title
          </label>
          <input
            {...register('title')}
            type='text'
            name='title'
            autoComplete='title'
            autoFocus
            placeholder='Enter your title...'
            className='w-full p-2 border border-gray-300 rounded-lg'
          />
        </div>
        <div className='flex flex-col py-3 px-4'>
          <label htmlFor='content' className='text-md py-2'>
            Description
          </label>
          <input
            {...register('content')}
            type='text'
            name='content'
            autoComplete='content'
            placeholder='Enter your content...'
            className='w-full p-2 border border-gray-300 rounded-lg'
          />
        </div>
        <div className='flex flex-col py-3 px-4'>
          <label htmlFor='image' className='text-md py-2'>
            Image
          </label>
          <input
            {...register('image')}
            type='file'
            name='image'
            autoComplete='image'
            placeholder='Enter your image...'
            className='w-full p-2 border border-gray-300 rounded-lg'
          />
        </div>
        <div className='flex flex-col items-end py-3 px-4'>
          <button
            type='submit'
            className='py-2 px-4 rounded-lg bg-slate-800 text-slate-100 font-bold text-sm hover:bg-slate-700 hover:text-slate-200 transition delay-100'
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
