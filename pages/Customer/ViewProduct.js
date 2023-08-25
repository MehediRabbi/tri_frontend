import React, { useState, useEffect } from "react";
import axios from 'axios';
import Layout from '../Layout/layout';


export default function View_Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const email = "ab@gmail.com";
        const response = await axios.get(`http://localhost:3000/customer/products/` + email);

        console.log(response.data);

        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const handleReject = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/customer/delete_order/${productId}`);

      console.log(response.data);
      // You can refresh the product list after deleting the order
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout page="about">
      <div>
        <h2>Product List</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={`http://localhost:3000/customer/getimage/${product.photoPath}`} alt={product.name} width={300} height={200} />
              <h3>{product.name}</h3>
              <button onClick={() => handleReject(product.id)}>Reject</button>
              <button>View Details</button>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
