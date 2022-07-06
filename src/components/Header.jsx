import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className='flex justify-between items-center py-4'>
      <Link to='/'>
        <div className='mx-2 py-2 px-4 shadow rouned'>
          <span className='font-bold text-xl tracking-widest text-gray-600 cursor-pointer hover:text-gray-500'>
            Hnak
          </span>
        </div>
      </Link>
      <div className='flex items-center'>
        {!user ? (
          <>
            <Link to='/login'>
              <div className='mx-2 py-2 px-4 shadow rouned'>
                <span className='text-center text-sm font-normal tracking-wide text-gray-600 cursor-pointer hover:text-gray-500'>
                  Login
                </span>
              </div>
            </Link>
            <Link to='/register'>
              <div className='mx-2 py-2 px-4 shadow rouned'>
                <span className='text-center text-sm font-normal tracking-wide text-gray-600 cursor-pointer hover:text-gray-500'>
                  Register
                </span>
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link to='/create'>
              <div className='mx-2 py-2 px-4 shadow rouned'>
                <span className='text-center text-sm font-normal tracking-wide text-gray-600 cursor-pointer hover:text-gray-500'>
                  Create
                </span>
              </div>
            </Link>
            <div className='mx-2 py-2 px-4 shadow rouned'>
              <button
                className='text-center inline text-sm font-normal tracking-wide text-gray-600 cursor-pointer hover:text-gray-500'
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
