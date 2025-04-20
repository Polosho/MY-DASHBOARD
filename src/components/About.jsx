const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-black">About Us</h2>
        <p className="text-black mb-4">
          We provide high-quality spaces for your needs. Our facilities are equipped with modern amenities.
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AboutModal;