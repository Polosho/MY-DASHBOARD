const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-black">Contact Us</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-black">Address</h3>
              <p className="text-black">123 Street Name, City, Country</p>
            </div>
            
            <div>
              <h3 className="font-medium text-black">Phone</h3>
              <p className="text-black">(123) 456-7890</p>
            </div>
            
            <div>
              <h3 className="font-medium text-black">Email</h3>
              <p className="text-black">info@example.com</p>
            </div>
  
            <div>
              <h3 className="font-medium text-black">Business Hours</h3>
              <p className="text-black">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-black">Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
  
          <button
            onClick={onClose}
            className="mt-6 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default ContactModal;