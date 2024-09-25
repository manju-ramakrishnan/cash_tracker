import React, { useState } from 'react';

export const TotalProduct = ({ filteredProducts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  //calculate the total price
  const calculateTotalPrice = () => {
    return filteredProducts.reduce((total, product) => total + product.price, 0);
  };

  //Open the modal to show the total price
  const handleShowTotal = () => {
    setIsModalOpen(true);
  };

  //close popup
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='z-10 text-black'>
      <button
        onClick={handleShowTotal}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Show Total Price
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Total Price</h2>
            <p className="mb-4">Total Price: ${calculateTotalPrice().toFixed(2)}</p>
            <button
              onClick={handleCloseModal}
              className="bg-red-500 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
