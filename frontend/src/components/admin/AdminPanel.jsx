import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'; // Import react-hot-toast

axios.defaults.baseURL = '/api'; // uses proxy during dev


const Modal = ({ isOpen, title, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Responsive container */}
      <div className="bg-white w-full h-full sm:w-[500px] sm:h-auto sm:rounded-xl shadow-lg p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Content (your form goes here) */}
        {children}
      </div>
    </div>
  );
};

export default function AdminPanel() {
  // validate admin 
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
  );
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', { username, password });
      localStorage.setItem('token', res.data.token);
      setIsAuthenticated(true);
      toast.success('Logged in successfully');
    } catch (err) {
      toast.error('Invalid credentials');
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    toast.success('Logged out');
  };

  // If not logged in → show login form
  if (!isAuthenticated) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded-xl shadow-lg w-80 space-y-4"
        >
          <h2 className="text-2xl font-bold text-center">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-amber-700 text-white py-2 rounded-lg hover:bg-amber-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    );
  }


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // UI state
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editing, setEditing] = useState(null); // product being edited

  // Search & filter
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  // form state (single source of truth) - uses imageUrls array
  const initialForm = { name: '', description: '', price: '', imageUrls: [''] };
  const [form, setForm] = useState(initialForm);

  // fetch products
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get('/products');
      // backend expected: { message: '...', products: [...] }
      // Normalize imageUrls to array for compatibility
      const items = (res.data.products || []).map(p => ({
        ...p,
        imageUrls: Array.isArray(p.imageUrls) ? p.imageUrls : (p.imageUrl ? [p.imageUrl] : []),
      }));
      setProducts(items);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch products');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // helpers
  const resetForm = () => setForm(initialForm);
  const openAdd = () => {
    resetForm();
    setShowAdd(true);
    setShowEdit(false);
  };
  const openEdit = (product) => {
    setEditing(product);
    setForm({
      name: product.name || '',
      description: product.description || '',
      price: String(product.price || ''),
      imageUrls: product.imageUrls || (product.imageUrl ? [product.imageUrl] : ['']),
      type: product.type || 'candle',
    });
    setShowEdit(true);
    setShowAdd(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e, index) => {
    const { value } = e.target;
    setForm((prev) => {
      const newUrls = [...prev.imageUrls];
      newUrls[index] = value;
      return { ...prev, imageUrls: newUrls };
    });
  };

  const addImageUrl = () => {
    setForm((prev) => ({ ...prev, imageUrls: [...prev.imageUrls, ''] }));
  };

  const removeImageUrl = (index) => {
    if (index === 0) return; // Cannot remove main image
    setForm((prev) => ({
      ...prev,
      imageUrls: prev.imageUrls.filter((_, i) => i !== index),
    }));
  };

  // Add
  const handleAdd = async (e) => {
    e.preventDefault();
    setError(null);
    if (!form.name || !form.price || !form.imageUrls[0] || !form.description) {
      setError('Please fill all required fields (including main image)');
      toast.error('Please fill all required fields (including main image)', { duration: 2000 });
      return;
    }

    try {
      const payload = {
        name: form.name,
        description: form.description,
        price: parseFloat(form.price),
        imageUrls: form.imageUrls.filter((url) => url.trim() !== ''),
        type: form.type,
      };
      const res = await axios.post('/products', payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const created = res.data.product;
      setProducts((prev) => [created, ...prev]);
      setShowAdd(false);
      resetForm();
      // ✅ Success toast
      toast.success(`${created.name} has been added successfully.`, {
        duration: 2000,
      });
    } catch (err) {
      console.error(err);
      setError('Failed to add product');
      // ❌ Error toast
      toast.error('Failed to add product. Please try again.', {
        duration: 2000,
      });
    }
  };

  // Edit
  const handleEdit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!editing) return;
    if (!form.name || !form.price || !form.imageUrls[0] || !form.description) {
      setError('Please fill all required fields (including main image)');
      toast.error('Please fill all required fields (including main image)', { duration: 2000 });
      return;
    }

    try {
      const payload = {
        name: form.name,
        description: form.description,
        price: parseFloat(form.price),
        imageUrls: form.imageUrls.filter((url) => url.trim() !== ''),
        type: form.type,
      };
      const res = await axios.put(`/products/${editing._id}`, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const updated = res.data.product;
      setProducts((prev) => prev.map((p) => (p._id === editing._id ? updated : p)));
      setShowEdit(false);
      setEditing(null);
      resetForm();
      // ✅ Success toast
      toast.success(`${updated.name} has been updated successfully.`, {
        duration: 2000,
      });
    } catch (err) {
      console.error(err);
      setError('Failed to update product');
      // ❌ Error toast
      toast.error('Failed to update product. Please try again.', {
        duration: 2000,
      });
    }
  };

  // Delete
  const handleDelete = async (_id) => {
    if (!confirm('Delete this product?')) return;
    try {
      await axios.delete(`/products/${_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProducts((prev) => prev.filter((p) => p._id !== _id));
      // ✅ Success toast
      toast.success('Product has been deleted successfully.', {
        duration: 2000,
      });
    } catch (err) {
      console.error(err);
      setError('Failed to delete');
      // ❌ Error toast
      toast.error('Failed to delete product. Please try again.', {
        duration: 2000,
      });
    }
  };

  // filtered list
  const visible = products.filter((p) => {
    const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
    const matchesType = filterType === 'all' || p.type === filterType;
    return matchesQuery && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-amber-700">Admin — Product Manager</h1>
            <p className="text-sm text-gray-600">Create, update and remove products. Changes sync with backend.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full sm:w-auto px-3 py-2 border rounded-md focus:outline-none"
            />

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full sm:w-auto px-3 py-2 border rounded-md"
            >
              <option value="all">All Types</option>
              <option value="candle">Candle</option>
              <option value="gift">Gift</option>
            </select>

            <button
              onClick={openAdd}
              className="w-full sm:w-auto px-3 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700"
            >
              Add Product
            </button>
          </div>
        </header>

        {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>}

        {loading ? (
          <div className="py-20 text-center">Loading…</div>
        ) : (
          <>
            {/* Responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {visible.map((p) => (
                <div key={p._id} className="bg-white rounded-lg shadow p-4 flex flex-col">
                  <div className="h-40 w-full overflow-hidden rounded-md mb-3 bg-gray-100 flex items-center justify-center">
                    <img src={p.imageUrls[0] || ''} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg truncate">{p.name}</h3>
                    <p className="text-amber-600 font-bold mt-2">₹{Number(p.price).toFixed(2)}</p>
                    <p className="mt-2 text-sm text-gray-500">
                      Type: <span className="font-medium text-gray-700">{p.type}</span>
                    </p>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => openEdit(p)}
                      className="flex-1 px-3 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="flex-1 px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Small-screen table fallback — horizontally scrollable */}
            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead>
                  <tr className="text-left bg-gray-100">
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Type</th>
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {visible.map((p) => (
                    <tr key={p._id} className="border-t">
                      <td className="px-4 py-3">{p.name}</td>
                      <td className="px-4 py-3">₹{Number(p.price).toFixed(2)}</td>
                      <td className="px-4 py-3">{p.type}</td>
                      <td className="px-4 py-3">
                        <img src={p.imageUrls[0] || ''} alt={p.name} className="w-20 h-12 object-contain rounded" />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => openEdit(p)}
                            className="px-3 py-1 bg-gray-200 rounded text-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(p._id)}
                            className="px-3 py-1 bg-red-500 text-white rounded text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {/* ADD Modal - always mounted but toggled */}
      <Modal isOpen={showAdd} title="Add Product" onClose={() => setShowAdd(false)}>
        <form onSubmit={handleAdd} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              type="number"
              step="0.01"
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Main Image URL</label>
            <input
              value={form.imageUrls[0] || ''}
              onChange={(e) => handleImageChange(e, 0)}
              type="url"
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>
          {form.imageUrls.slice(1).map((url, index) => (
            <div key={index + 1} className="flex items-center gap-2">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Additional Image URL {index + 1}</label>
                <input
                  value={url}
                  onChange={(e) => handleImageChange(e, index + 1)}
                  type="url"
                  className="mt-1 block w-full border rounded px-3 py-2"
                />
              </div>
              <button
                type="button"
                onClick={() => removeImageUrl(index + 1)}
                className="mt-6 px-2 py-1 bg-red-500 text-white rounded text-sm"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addImageUrl}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Add Another Image
          </button>
          <div>
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="mt-1 block w-full border rounded px-3 py-2"
            >
              <option value="candle">Candle</option>
              <option value="gift">Gift</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>

          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={() => setShowAdd(false)}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-amber-600 text-white rounded">
              Add
            </button>
          </div>
        </form>
      </Modal>

      {/* EDIT Modal - always mounted but toggled */}
      <Modal
        isOpen={showEdit}
        title="Edit Product"
        onClose={() => {
          setShowEdit(false);
          setEditing(null);
          resetForm();
        }}
      >
        <form onSubmit={handleEdit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              type="number"
              step="0.01"
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Main Image URL</label>
            <input
              value={form.imageUrls[0] || ''}
              onChange={(e) => handleImageChange(e, 0)}
              type="url"
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>
          {form.imageUrls.slice(1).map((url, index) => (
            <div key={index + 1} className="flex items-center gap-2">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Additional Image URL {index + 1}</label>
                <input
                  value={url}
                  onChange={(e) => handleImageChange(e, index + 1)}
                  type="url"
                  className="mt-1 block w-full border rounded px-3 py-2"
                />
              </div>
              <button
                type="button"
                onClick={() => removeImageUrl(index + 1)}
                className="mt-6 px-2 py-1 bg-red-500 text-white rounded text-sm"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addImageUrl}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Add Another Image
          </button>
          <div>
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="mt-1 block w-full border rounded px-3 py-2"
            >
              <option value="candle">Candle</option>
              <option value="gift">Gift</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>

          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={() => {
                setShowEdit(false);
                setEditing(null);
                resetForm();
              }}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-amber-600 text-white rounded">
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}