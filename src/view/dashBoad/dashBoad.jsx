import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('add');
  const [ProductId, setProductId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  const [productData, setProductData] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  // Handle Add Product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const newProduct = { ProductId, name, price, img };
      await axios.post('http://localhost:8070/product/add', newProduct);
      alert('Product added successfully');
      clearForm();
      fetchAllProducts(); // Refresh product list after adding
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Handle Update Product
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const updatedProduct = { name, price, img };
      await axios.put(`http://localhost:8070/product/update/${ProductId}`, updatedProduct);
      alert('Product updated successfully');
      clearForm();
      fetchAllProducts(); // Refresh product list after updating
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  // Handle Search Product by ID
  const handleSearchProductById = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8070/product/find/${ProductId}`);
      setProductData(response.data);
    } catch (error) {
      console.error('Error searching product:', error);
    }
  };

  // Handle Delete Product by ID
  const handleDeleteProductById = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:8070/product/delete/${ProductId}`);
      alert('Product deleted successfully');
      clearForm();
      fetchAllProducts(); // Refresh product list after deleting
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Fetch All Products
  const fetchAllProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8070/product/');
      setAllProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    // Fetch all products initially
    fetchAllProducts();
  }, []);

  // Clear form fields
  const clearForm = () => {
    setProductId('');
    setName('');
    setPrice('');
    setImg('');
    setProductData(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </div>
        <nav className="mt-10">
          <ul>
            <li>
              <button
                className={`w-full py-2.5 px-4 text-left ${
                  activeSection === 'add' ? 'bg-gray-700' : 'hover:bg-gray-600'
                }`}
                onClick={() => setActiveSection('add')}
              >
                Add Product
              </button>
            </li>
            <li>
              <button
                className={`w-full py-2.5 px-4 text-left ${
                  activeSection === 'update' ? 'bg-gray-700' : 'hover:bg-gray-600'
                }`}
                onClick={() => setActiveSection('update')}
              >
                Update Product
              </button>
            </li>
            <li>
              <button
                className={`w-full py-2.5 px-4 text-left ${
                  activeSection === 'search' ? 'bg-gray-700' : 'hover:bg-gray-600'
                }`}
                onClick={() => setActiveSection('search')}
              >
                Search Product
              </button>
            </li>
            <li>
              <button
                className={`w-full py-2.5 px-4 text-left ${
                  activeSection === 'delete' ? 'bg-gray-700' : 'hover:bg-gray-600'
                }`}
                onClick={() => setActiveSection('delete')}
              >
                Delete Product
              </button>
            </li>
            <li>
              <button
                className={`w-full py-2.5 px-4 text-left ${
                  activeSection === 'display' ? 'bg-gray-700' : 'hover:bg-gray-600'
                }`}
                onClick={() => setActiveSection('display')}
              >
                Display All Products
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-10">
        {activeSection === 'add' && (
          <section>
            <h2 className="text-3xl font-semibold mb-4">Add Product</h2>
            <form className="space-y-4" onSubmit={handleAddProduct}>
              <div>
                <label htmlFor="ProductId" className="block text-gray-700">Product ID</label>
                <input
                  type="text"
                  id="ProductId"
                  value={ProductId}
                  onChange={(e) => setProductId(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-gray-700">Price</label>
                <input
                  type="text"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="img" className="block text-gray-700">Image Name</label>
                <input
                  type="text"
                  id="img"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
              >
                Add Product
              </button>
            </form>
          </section>
        )}

        {activeSection === 'update' && (
          <section>
            <h2 className="text-3xl font-semibold mb-4">Update Product</h2>
            <form className="space-y-4" onSubmit={handleUpdateProduct}>
              <div>
                <label htmlFor="ProductId" className="block text-gray-700">Product ID</label>
                <input
                  type="text"
                  id="ProductId"
                  value={ProductId}
                  onChange={(e) => setProductId(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-gray-700">Price</label>
                <input
                  type="text"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label htmlFor="img" className="block text-gray-700">Image Name</label>
                <input
                  type="text"
                  id="img"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600"
              >
                Update Product
              </button>
            </form>
          </section>
        )}

        {activeSection === 'search' && (
          <section>
            <h2 className="text-3xl font-semibold mb-4">Search Product</h2>
            <form className="space-y-4" onSubmit={handleSearchProductById}>
              <div>
                <label htmlFor="ProductId" className="block text-gray-700">Product ID</label>
                <input
                  type="text"
                  id="ProductId"
                  value={ProductId}
                  onChange={(e) => setProductId(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Search Product
              </button>
            </form>

            {productData && (
              <div className="mt-6 p-4 bg-gray-200 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Product Details:</h3>
                <p><strong>ID:</strong> {productData.ProductId}</p>
                <p><strong>Name:</strong> {productData.name}</p>
                <p><strong>Price:</strong> Rs{productData.price}</p>
                <p><strong>Image Name:</strong> {productData.img}</p>
              </div>
            )}
          </section>
        )}

        {activeSection === 'delete' && (
          <section>
            <h2 className="text-3xl font-semibold mb-4">Delete Product</h2>
            <form className="space-y-4" onSubmit={handleDeleteProductById}>
              <div>
                <label htmlFor="ProductId" className="block text-gray-700">Product ID</label>
                <input
                  type="text"
                  id="ProductId"
                  value={ProductId}
                  onChange={(e) => setProductId(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
              >
                Delete Product
              </button>
            </form>
          </section>
        )}

        {activeSection === 'display' && (
          <section>
            <h2 className="text-3xl font-semibold mb-4">All Products</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-md">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="py-2 px-4">ID</th>
                    <th className="py-2 px-4">Name</th>
                    <th className="py-2 px-4">Price</th>
                    <th className="py-2 px-4">Image Name</th>
                  </tr>
                </thead>
                <tbody>
                  {allProducts.map((product) => (
                    <tr key={product.ProductId} className="text-center border-t">
                      <td className="py-2 px-4">{product.ProductId}</td>
                      <td className="py-2 px-4">{product.name}</td>
                      <td className="py-2 px-4">Rs{product.price}</td>
                      <td className="py-2 px-4">{product.img}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
