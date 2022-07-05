import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className='flex justify-between items-center py-4'>
      <span className='font-bold text-xl tracking-widest text-gray-600 cursor-pointer hover:text-gray-500'>
        Hnak
      </span>
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
