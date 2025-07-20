import React, { useState } from 'react';
import './AdminPanel.css';

function AdminPanel({ products, onUpdateProducts, onClose }) {
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    phone: '',
    image: ''
  });

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      description: product.description,
      phone: product.phone || '',
      image: product.image
    });
  };

  const handleSave = () => {
    const updatedProducts = products.map(p => 
      p.id === editingProduct.id 
        ? { ...p, ...formData }
        : p
    );
    onUpdateProducts(updatedProducts);
    setEditingProduct(null);
    setFormData({ title: '', description: '', phone: '', image: '' });
  };

  const handleAdd = () => {
    const newProduct = {
      id: products.length + 1,
      ...formData,
      order: products.length + 1
    };
    onUpdateProducts([...products, newProduct]);
    setFormData({ title: '', description: '', phone: '', image: '' });
  };

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(p => p.id !== productId);
    onUpdateProducts(updatedProducts);
  };

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h2>Admin Panel</h2>
        <button onClick={onClose} className="close-btn">×</button>
      </div>
      
      <div className="admin-content">
        <div className="add-product">
          <h3>Add/Edit Product</h3>
          <input
            type="text"
            placeholder="Product Title"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
          <textarea
            placeholder="Product Description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
          <input
            type="text"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={formData.image}
            onChange={(e) => setFormData({...formData, image: e.target.value})}
          />
          <div className="admin-buttons">
            {editingProduct ? (
              <button onClick={handleSave}>Update Product</button>
            ) : (
              <button onClick={handleAdd}>Add Product</button>
            )}
            {editingProduct && (
              <button onClick={() => setEditingProduct(null)}>Cancel</button>
            )}
          </div>
        </div>

        <div className="product-list">
          <h3>Current Products</h3>
          {products.map(product => (
            <div key={product.id} className="product-item">
              <div className="product-info">
                <strong>{product.title}</strong>
                <p>{product.description}</p>
                {product.phone && <p>Phone: {product.phone}</p>}
              </div>
              <div className="product-actions">
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)} className="delete-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel; 