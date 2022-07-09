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
    <div className='flex items-center justify-between py-4'>
      <Link to='/'>
        <div className='px-4 py-2 mx-2 shadow rouned'>
          <span className='text-xl font-bold tracking-widest text-gray-600 cursor-pointer hover:text-gray-500'>
            Hnak
          </span>
        </div>
      </Link>
      <div className='flex items-center'>
        {!user ? (
          <>
            <Link to='/login'>
              <div className='px-4 py-2 mx-2 shadow rouned'>
                <span className='text-sm font-normal tracking-wide text-center text-gray-600 cursor-pointer hover:text-gray-500'>
                  Login
                </span>
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link to='/create'>
              <div className='px-4 py-2 mx-2 shadow rouned'>
                <span className='text-sm font-normal tracking-wide text-center text-gray-600 cursor-pointer hover:text-gray-500'>
                  Create
                </span>
              </div>
            </Link>
            <div className='px-4 py-2 mx-2 shadow rouned'>
              <button
                className='inline text-sm font-normal tracking-wide text-center text-gray-600 cursor-pointer hover:text-gray-500'
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
