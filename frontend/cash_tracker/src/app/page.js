"use client"; // Indicates this file is a client component in Next.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components for routing
import ProductList from './components/Product'; // Import Product List component
import AddProduct from './components/AddProduct'; // Import Add Product component
import EditProduct from './components/EditProduct'; // Import Edit Product component

function App() {
  return (
    <Router>
      <div className="bg-black text-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-12 lg:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Routes>
            <Route path="/" element={<ProductList />} /> {/* Route for the Product List */}
            <Route path="/add-product" element={<AddProduct />} /> {/* Route for Adding a Product */}
            <Route path="/edit-product/:id" element={<EditProduct />} /> {/* Route for Editing a Product by ID */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; // Export the App component
