import React from 'react';

const Post = ({ post }) => {
  return (
    <article className='overflow-hidden rounded-lg shadow-lg '>
      <img
        alt={post.title}
        className='object-cover object-center w-full h-64'
        src={post.image}
      />
      <header className='flex items-center justify-between px-2 py-2 leading-tight md:px-2 md:py-2'>
        <h1 className='text-md'>
          <span className='text-pink-500 font-bold'>{post.title}</span>
        </h1>
      </header>

      <div className='px-2 py-2 leading-tight md:px-2 md:py-2'>
        <p className='text-sm text-grey-500'>{post.content}</p>
      </div>
      <div className='px-2 py-2 leading-tight md:px-2 md:py-2'>
        <p className='text-xs text-grey-500'>{post.user}</p>
      </div>
    </article>
  );
};

export default Post;
