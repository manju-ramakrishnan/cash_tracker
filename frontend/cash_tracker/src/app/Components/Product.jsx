"use client";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { TotalProduct } from './TotalProduct';

export default function ProductList() {
  const [products, setProducts] = useState([]); // State for products
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
  const [nameFilter, setNameFilter] = useState(""); // State for name filter
  const [categoryFilter, setCategoryFilter] = useState(""); // State for category filter
  const [minPrice, setMinPrice] = useState(""); // State for minimum price
  const [maxPrice, setMaxPrice] = useState(""); // State for maximum price
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    // Fetch products
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}`);
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        setErrorMessage("Error fetching products. Please try again later.");
        console.error("Error fetching data: ", error);
      }
    };

    fetchProducts();
  }, []);

  // Apply filters whenever the filter states change
  useEffect(() => {
    const handler = setTimeout(applyFilters, 300);
    return () => clearTimeout(handler);
  }, [nameFilter, categoryFilter, minPrice, maxPrice, products]);

  // Function to apply filters
  const applyFilters = () => {
    try {
      const filtered = products.filter(product => {
        const withinName = product.name.toLowerCase().includes(nameFilter.toLowerCase());
        const withinCategory = product.category.toLowerCase().includes(categoryFilter.toLowerCase());
        const withinPriceRange = (minPrice === "" || product.price >= parseFloat(minPrice)) &&
                                  (maxPrice === "" || product.price <= parseFloat(maxPrice));
        return withinName && withinCategory && withinPriceRange;
      });
      setFilteredProducts(filtered);
      setErrorMessage(""); // Clear error message on successful filtering
    } catch (error) {
      setErrorMessage("Error applying filters. Please check your input.");
      console.error("Error applying filters: ", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
      setFilteredProducts(prevFiltered => prevFiltered.filter(product => product.id !== id));
      setErrorMessage(""); // Clear error message on successful deletion
    } catch (error) {
      setErrorMessage("Error deleting product. Please try again.");
      console.error("Error deleting product: ", error);
    }
  };
  

  return (
    <div className="container">
      <h1 className="text-6xl font-bold text-center">Product List</h1>
  
      {/* Display error message if exists */}
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

      <div className="mt-6 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0"> 
        <Link 
          to="/add-product" 
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add New Product
        </Link>
        {/* Button to show total price */}
        <div className="flex items-center"> 
          <TotalProduct filteredProducts={filteredProducts} />
        </div>
      </div>

      {/* Filter Inputs */}
      <div className="mt-3 mb-4 flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
        <input
          type="text"
          placeholder="Filter by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="text-black border p-2 rounded w-full md:w-1/3"
        />
        <input
          type="text"
          placeholder="Filter by category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="text-black border p-2 rounded w-full md:w-1/3"
        />
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="text-black border p-2 rounded w-full md:w-1/2"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="text-black border p-2 rounded w-full md:w-1/2"
          />
        </div>
        <button
          onClick={applyFilters}
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150"
        >
          Apply Filters
        </button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {filteredProducts.map(product => (
          <div 
            key={product.id} 
            className="product bg-white bg-opacity-10 backdrop-blur-md p-4 rounded shadow-lg"
          >
            <h2 className="text-xl">{product.name}</h2>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <div>
              <Link 
                to={`/edit-product/${product.id}`} 
                className="text-blue-500"
              >
                Edit
              </Link>
              <button 
                onClick={() => deleteProduct(product.id)} 
                className="ml-4 text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
