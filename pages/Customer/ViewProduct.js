import Layout from '../Layout/layout';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from "react";
import axios from 'axios';

export default function View_Product() {
  const [products, setProducts] = useState([]);
   
    async function ForViewProfile()
  {try {
    const phoneNo="ab@gmail.com";
    const response = await axios.get(`http://localhost:3000/customer/products/`+phoneNo);

      console.log(response.data);

      setProducts(response.data);
    }
    catch(error)
    {console.log(error); }
}
ForViewProfile();
const handleReject = (productId) => {
  Reject();
  async function Reject(){
    try {
      
      const response = await axios.delete(`http://localhost:3000/customer/delete_order/${productId}`);
  
        console.log(response.data);
  
       
      }
      catch(error)
      {console.log(error); }
  }
}
  return (
    <>
      <Layout page="about">
      <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.photoPath} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{}</p>
            <button onClick={() => handleReject(product.id)}>Reject</button>
            <button>View Details</button>
          </li>
        ))}
      </ul>
    </div>
        {/* <div>
          <Image src="/1 (2).jpeg" alt="" width={500} height={300} />
          <p>Quactas - 150 TK</p>
          <Link href="/buy">
            <button>Buy</button>
            <button>Add to carts</button>
          </Link>
        </div> */}
      </Layout>
    </>
  );
}