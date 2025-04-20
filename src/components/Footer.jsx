import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a4d3c] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Logo</h2>
          <p className="text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-200 hover:text-white">Home</a></li>
            <li><a href="/about" className="text-gray-200 hover:text-white">About</a></li>
            <li><a href="/services" className="text-gray-200 hover:text-white">Services</a></li>
            <li><a href="/contact" className="text-gray-200 hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <ul className="space-y-2 text-gray-200">
            <li>123 Street Name</li>
            <li>City, Country</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@example.com</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-[#024731] flex items-center justify-center hover:bg-[#023d2a] transition-colors"
            >
              <FaFacebook className="text-white text-xl" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-[#024731] flex items-center justify-center hover:bg-[#023d2a] transition-colors"
            >
              <FaInstagram className="text-white text-xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-[#0a3d30] pt-8">
        <p className="text-center text-gray-200">
          © 2024 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;