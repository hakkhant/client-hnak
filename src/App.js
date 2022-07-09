import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import PostForm from './pages/PostForm';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='create' element={<PostForm />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
