import { useState, useEffect } from 'react';
import Post from '../components/Post';
import axios from '../services/axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.get('/api/memories', config);
    if (res) {
      setPosts(res.data);
    }
  };
  fetchPosts();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div className='py-6'>
      {posts?.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className='text-center'>
          <h1 className='text-xl text-gray-500 font-bold'>No posts yet</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
