import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link'
import Layout from "../Layout/layout";
import axios from "axios";
import dotenv from 'dotenv';

const Login = () => {

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 

  const handleLogin = async (e) => {

    e.preventDefault();

 

    if (!emailRegex.test(username)) {

      setErrorMessage("Invalid email address");

      return;

    } else if (!password.trim()) {

      setErrorMessage("Password is required");

      return;

    }

 

    // Call the login function to perform the API request

    login();

  };

//
  async function login() {

    try {

      const data = {

        email: username,

        password: password,

      };

      console.log(data);

      const response = await axios.post(`${process.env.NEXT_PUBLIC_CUSTOMER}logIn`, data, {


      //const apiUrl = process.env.API_URL; 

      //const response = await axios.post(`${apiUrl}/login`, data,{

      //const response = await axios.post("http://localhost:3000/customer/login", data, {//

        headers: {

          'Content-Type': 'application/json'

        }

      });

      console.log(response);

      if (response.data.name === username) {

        console.log("Login successful!");

        // setErrorMessage("okk");

        // Redirect the user to the dashboard or home page after successful login

        // You can use Next.js router for this, or your backend can provide a token to store in the client for future authenticated requests.

        window.location.href = '/Customer/Home';//

      } else {

        setErrorMessage("Invalid username or password");

      }

    } catch (error) {

      console.error(error);

      setErrorMessage("Backend server not responding. Please try again.");

    }

  }

 


  return (
    <div>
      <Layout pages="">
      <h2>Login</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" btn-sm >Login</button>
      </form>
      <p>
         <Link href="/Customer/SignUp">Don't have an account?Go to Sign Up</Link>
      </p>
      </Layout>
    </div>
    
  );
};

export default Login;