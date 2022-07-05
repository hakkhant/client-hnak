import React from 'react';

const Post = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <article className='overflow-hidden rounded-lg shadow-lg '>
      <img
        alt={post.title}
        className='object-cover object-center w-full h-64'
        src={post.image}
      />
      <header className='flex items-center justify-between px-3 py-1 leading-tight md:px-3 md:py-1'>
        <h1 className='text-md'>
          <span className='text-black'>{post.title}</span>
        </h1>
      </header>

      <div className='px-3 py-1 leading-tight md:px-3 md:py-1'>
        <p className='text-sm text-grey-500'>{post.content}</p>
      </div>

      <footer className='flex items-center justify-between px-3 py-1 leading-none md:px-3 md:py-1'>
        <small className='text-xs text-gray-500 '>{user}</small>
      </footer>
    </article>
  );
};

export default Post;
