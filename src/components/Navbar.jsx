import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceModal from './Service';
import AboutModal from './About';
import ContactModal from './Contact';

const Navbar = () => {
  const [isServiceModalOpen, setServiceModalOpen] = useState(false);
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  return (
    <nav className="bg-[#024731] shadow-lg w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="NVSU Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-semibold text-white">NVSU</span>
          </div>
          
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-white bg-[#001a0f] hover:bg-[#002f1c] px-4 py-2 rounded transition-colors font-medium"
            >
              Home
            </Link>
            <button
              onClick={() => setServiceModalOpen(true)}
              className="text-white bg-[#001a0f] hover:bg-[#002f1c] px-4 py-2 rounded transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => setAboutModalOpen(true)}
              className="text-white bg-[#001a0f] hover:bg-[#002f1c] px-4 py-2 rounded transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => setContactModalOpen(true)}
              className="text-white bg-[#001a0f] hover:bg-[#002f1c] px-4 py-2 rounded transition-colors font-medium"
            >
              Contact
            </button>
            <Link 
              to="/login" 
              className="text-white bg-[#001a0f] hover:bg-[#002f1c] px-4 py-2 rounded transition-colors font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      <ServiceModal isOpen={isServiceModalOpen} onClose={() => setServiceModalOpen(false)} />
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setAboutModalOpen(false)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setContactModalOpen(false)} />
    </nav>
  );
};

export default Navbar;