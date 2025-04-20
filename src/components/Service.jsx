const ServiceModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-black">Our Services</h2>
        
        <div className="grid gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium text-black text-lg">Gym</h3>
            <p className="text-black mb-3">Modern equipment and personal trainers available</p>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              Reserve Slot
            </button>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-medium text-black text-lg">Cafeteria</h3>
            <p className="text-black mb-3">Fresh meals and beverages served daily</p>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              Book Table
            </button>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-medium text-black text-lg">Food Court</h3>
            <p className="text-black mb-3">Multiple cuisine options available</p>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              View & Reserve
            </button>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-medium text-black text-lg">Private Room</h3>
            <p className="text-black mb-3">Perfect for individual work</p>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              Reserve Room
            </button>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-medium text-black text-lg">Meeting Room</h3>
            <p className="text-black mb-3">Ideal for small groups</p>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              Book Room
            </button>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ServiceModal;