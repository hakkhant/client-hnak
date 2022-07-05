import Footer from './components/Footer';
import Header from './components/Header';
const App = () => {
  return (
    <Router>
      <div className='max-w-6xl mx-auto px-4 lg:px-0'>
        <Header />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
