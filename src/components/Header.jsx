import { Link, useNavigate } from 'react-router-dom';
import axios from '../services/axios';

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const logout = async () => {
    const response = await axios.post('/api/logout');
    if (response) {
      localStorage.removeItem('user');
      navigate('/login');
    }
  };

  return (
    <div className='flex justify-between items-center py-4'>
      <Link to='/'>
        <span className='font-bold text-xl tracking-widest text-gray-600 cursor-pointer hover:text-gray-500'>
          Hnak
        </span>
      </Link>
      <div className='flex items-center'>
        {!user ? (
          <>
            <Link to='/login'>
              <span className='text-sm font-normal tracking-wide text-gray-600 cursor-pointer hover:text-gray-500 pr-4'>
                Login
              </span>
            </Link>
            <Link to='/register'>
              <span className='text-sm font-normal tracking-wide text-gray-600 cursor-pointer hover:text-gray-500 pr-4'>
                Register
              </span>
            </Link>
          </>
        ) : (
          <>
            <Link to='/create'>
              <span className='text-sm font-normal tracking-wide text-gray-600 cursor-pointer hover:text-gray-500 pr-4'>
                Create
              </span>
            </Link>
            <button
              className='inline text-sm font-normal tracking-wide text-gray-600 cursor-pointer hover:text-gray-500'
              onClick={logout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
