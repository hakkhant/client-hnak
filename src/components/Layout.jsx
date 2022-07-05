import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 lg:px-0'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
