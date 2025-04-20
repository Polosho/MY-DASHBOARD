import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Service';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="w-screen min-h-screen  bg-cover bg-center">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Service />
              <About />
            </>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
