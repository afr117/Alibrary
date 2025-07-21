import React, { useState, useEffect } from 'react';
import AdminPanel from './AdminPanel';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    console.log('App component loaded - Admin button should be visible');
    // Static products data (this will be replaced by CMS data)
    const staticProducts = [
      {
        id: 1,
        title: "Sample Product 1",
        description: "This is the first sample product with a detailed description.",
        phone: "123-456-7890",
        image: "/images/sample1.jpg",
        order: 1
      },
      {
        id: 2,
        title: "Sample Product 2", 
        description: "This is the second sample product with a detailed description.",
        phone: "",
        image: "/images/sample2.jpg",
        order: 2
      },
      {
        id: 3,
        title: "Sample Product 3",
        description: "This is the third sample product with a detailed description.",
        phone: "555-123-4567",
        image: "/images/sample3.jpg",
        order: 3
      }
    ];

    setProducts(staticProducts);
  }, []);

  // Placeholder images using data URLs
  const getPlaceholderImage = (productId) => {
    const colors = ['#e0e0e0', '#f0f0f0', '#e8e8e8'];
    const color = colors[(productId - 1) % colors.length];
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='140' viewBox='0 0 220 140'%3E%3Crect width='220' height='140' fill='${color.replace('#', '%23')}'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-family='Arial' font-size='14'%3E${encodeURIComponent(`Product ${productId}`)}%3C/text%3E%3C/svg%3E`;
  };

  const handleUpdateProducts = (updatedProducts) => {
    setProducts(updatedProducts);
    // In a real app, you would save this to localStorage or a backend
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Product Library</h1>
          <button 
            onClick={() => {
              console.log('Admin button clicked!');
              setShowAdmin(true);
            }}
            className="admin-btn"
            style={{ backgroundColor: '#ff4444', color: 'white', padding: '10px 20px', fontSize: '16px', fontWeight: 'bold' }}
          >
            🔧 ADMIN PANEL
          </button>
        </div>
        <div className="grid">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img 
                src={product.image || getPlaceholderImage(product.id)} 
                alt={product.title}
                onError={(e) => {
                  e.target.src = getPlaceholderImage(product.id);
                }}
              />
              <div className="product-desc">{product.description}</div>
              {product.phone && (
                <div className="product-phone">Phone: {product.phone}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {showAdmin && (
        <AdminPanel 
          products={products}
          onUpdateProducts={handleUpdateProducts}
          onClose={() => setShowAdmin(false)}
        />
      )}
    </div>
  );
}

export default App; 