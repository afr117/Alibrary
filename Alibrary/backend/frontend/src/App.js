import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Product Library</h1>
        <div className="grid">
          <div className="product">
            <img src="/images/sample1.jpg" alt="Product 1" />
            <div className="product-desc">Sample Product 1 Description</div>
            <div className="product-phone">Phone: 123-456-7890</div>
          </div>
          <div className="product">
            <img src="/images/sample2.jpg" alt="Product 2" />
            <div className="product-desc">Sample Product 2 Description</div>
          </div>
          <div className="product">
            <img src="/images/sample3.jpg" alt="Product 3" />
            <div className="product-desc">Sample Product 3 Description</div>
            <div className="product-phone">Phone: 555-123-4567</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 