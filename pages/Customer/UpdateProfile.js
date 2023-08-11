import Layout from '../Layout/layout';
import React, { useState, useEffect } from "react";
import axios from 'axios';

const ProfilePage = () => {
  const [customerData, setCustomerData] = useState({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchCustomerData();
  }, []);

  const fetchCustomerData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_CUSTOMER}get/12`); // Replace with your API endpoint
      setCustomerData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setCustomerData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_CUSTOMER}update/12`, customerData); // Replace with your API endpoint

      if (response.status === 200) {
        setMessage('Update successful');
      } else {
        setMessage('Update failed');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while updating');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout page="about">
      <div>
        <h2>Customer Profile</h2>
        {message && <p>{message}</p>}
        <form>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              value={customerData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              value={customerData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              value={customerData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            />
          </div>
          {/* Add more input fields for other customer data */}
        </form>
        <button onClick={handleUpdate}>Update</button>
      </div>
    </Layout>
  );
};

export default ProfilePage;
