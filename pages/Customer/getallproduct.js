import React, { useState, useEffect } from "react";
import axios from "axios";

function SProductList() {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/customer/getallproduct");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  const handleBuy = (productId) => {
    setSelectedProductId(productId);
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handlePaymentConfirmation = () => {
    console.log(`Selected Product ID: ${selectedProductId}`);
    console.log(`Selected Payment Method: ${selectedPaymentMethod}`);
    // Implement further logic here (e.g., show a confirmation message)
  };

  return (
    <div>
      <h2>All Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={`http://localhost:3000/customer/getimage/${product.photoPath}`}
              alt={product.name}
              width={300}
              height={200}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button onClick={() => handleBuy(product.id)}>Buy</button>
          </div>
        ))}
      </div>
      {selectedProductId && (
        <div className="payment-selection">
          <h2>Select Payment Method</h2>
          <form>
            <label>
              <input
                type="radio"
                value="bKash"
                checked={selectedPaymentMethod === "bKash"}
                onChange={handlePaymentMethodChange}
              />
              bKash
            </label>
            <label>
              <input
                type="radio"
                value="Nagad"
                checked={selectedPaymentMethod === "Nagad"}
                onChange={handlePaymentMethodChange}
              />
              Nagad
            </label>
            <label>
              <input
                type="radio"
                value="Cash on Delivery"
                checked={selectedPaymentMethod === "Cash on Delivery"}
                onChange={handlePaymentMethodChange}
              />
              Cash on Delivery
            </label>
            <button onClick={handlePaymentConfirmation}>Ok</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SProductList;
