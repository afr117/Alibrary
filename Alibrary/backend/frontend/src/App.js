import React from 'react';
import './App.css';

function App() {
  // Placeholder images using data URLs (simple colored rectangles)
  const placeholder1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='140' viewBox='0 0 220 140'%3E%3Crect width='220' height='140' fill='%23e0e0e0'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-family='Arial' font-size='14'%3EProduct 1%3C/text%3E%3C/svg%3E";
  const placeholder2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='140' viewBox='0 0 220 140'%3E%3Crect width='220' height='140' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-family='Arial' font-size='14'%3EProduct 2%3C/text%3E%3C/svg%3E";
  const placeholder3 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='140' viewBox='0 0 220 140'%3E%3Crect width='220' height='140' fill='%23e8e8e8'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-family='Arial' font-size='14'%3EProduct 3%3C/text%3E%3C/svg%3E";

  return (
    <div className="App">
      <div className="container">
        <h1>Product Library</h1>
        <div className="grid">
          <div className="product">
            <img src={placeholder1} alt="Product 1" />
            <div className="product-desc">Sample Product 1 Description</div>
            <div className="product-phone">Phone: 123-456-7890</div>
          </div>
          <div className="product">
            <img src={placeholder2} alt="Product 2" />
            <div className="product-desc">Sample Product 2 Description</div>
          </div>
          <div className="product">
            <img src={placeholder3} alt="Product 3" />
            <div className="product-desc">Sample Product 3 Description</div>
            <div className="product-phone">Phone: 555-123-4567</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 