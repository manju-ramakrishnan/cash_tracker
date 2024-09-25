"use client";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddProduct() {
  const [product, setProduct] = useState({ name: '', category: '', price: '', status: 1 });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  //Cancel Button
  const cancelSubmit = () => {
    navigate('/')
  }

  //Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!product.name || !product.category) {
      setError("Name and category are required");
      return;
    }
    
    if (product.price <= 0) {
      setError("Price must be a positive number");
      return;
    }
  
    try {
      // Add Products
      await axios.post(`${API_URL}`, product);
      navigate('/'); // Redirect after successful addition
    } catch (error) {
      setError("Error adding product: " + error.message);
      console.error("Error adding product: ", error);
    }
  };
  

  return (
    <div className="mx-auto custom-width bg-white shadow-md rounded-lg p-8">
    <h1 className="text-2xl font-bold mb-6 text-black">Add New Product</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="text-black mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Product Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            className=" text-black mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Product Price */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="text-black mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Product
          </button>
        </div>
        <div>
        <button
          type="button" onClick={cancelSubmit}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
