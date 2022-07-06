import { useState, useEffect } from 'react';
import Post from '../components/Post';
import Spinner from '../components/Spinner';
import axios from '../services/axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    setLoading(true);
    const res = await axios.get('/posts', config);
    if (res) {
      setPosts(res.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    fetchPosts();
  }, [user, navigate]);

  if (loading) {
    return <Spinner />;
  }

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
