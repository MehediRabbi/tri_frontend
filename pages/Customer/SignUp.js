import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import Layout from "../Layout/layout";
import axios from 'axios';

const RegistrationPage = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [house, setHouseName] = useState("");
  const [road, setRoadName] = useState("");
  const [city, setCityName] = useState("");
  const [district, setDistrictName] = useState("");
  const [myfile, setMyfile] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{11}$/; // Assuming phone numbers are 10 digits long
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum eight characters, at least one letter and one number

    if (!firstName.trim() || !lastName.trim()) {
      setErrorMessage("Both First Name and Last Name are required");
    } else if (!phoneRegex.test(phoneNumber)) {
      setErrorMessage("Invalid phone number");
    } else if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email address");
    } else if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 8 characters long and contain at least one letter and one number"
      );
    } else if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
    } else if (!gender) {
      setErrorMessage("Please select a gender");
    } else if (!dateOfBirth) {
      setErrorMessage("Date of birth is required");
    } else if (!house.trim() || !road.trim() || !city.trim() || !district.trim() || !myfile) {
      setErrorMessage("Please fill in all address details and provide a customer photo");
    } else {
      // Assuming the registration is successful, redirect to the home page

      try {
        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);

        formData.append("phoneNumber", phoneNumber);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("gender", gender);
        formData.append("dateOfBirth", dateOfBirth);
        formData.append("house", house);
        formData.append("road", road);
        formData.append("city", city);
        formData.append("district", district);
        formData.append("myfile", myfile);
  

        //const apiUrl = process.env.API_URL;

        //const response = await axios.post(`${apiUrl}/create-profile`, data);

        const response = await axios.post(`${process.env.NEXT_PUBLIC_CUSTOMER}create-profile`, formData, {
  
        //const response = await axios.post("http://localhost:3000/customer/create-profile", formData, {
          headers: {
            "Content-Type": "multipart/form-data", 
          },
        });
console.log(response.data);
        if (response.status === 201) {
          console.log("res successful!");
          setErrorMessage("Registration successful!");
        
          window.location.href = '/Customer/LogIn';
        
        } 

          
      //  else if(response.statusText==="Not Found")
      //     {console.log("res unsuccessful!");
      //       setErrorMessage("Registration faild!");} 
          
      } catch (error) {
        // if (error.response && error.response.status === 404) {
        //   setErrorMessage("Registration failed. Email already registered."); 
        // } else {
          console.error(error);
          setErrorMessage("Error occurred Backend during registration."); 
        }
      // }
      }
      
    
  };

  return (
    <div>
      <Layout page="">
      <h2>Registration</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleRegistration}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div>
          <label>House Name:</label>
          <input
            type="text"
            value={house}
            onChange={(e) => setHouseName(e.target.value)}
          />
        </div>
        <div>
          <label>Road Name:</label>
          <input
            type="text"
            value={road}
            onChange={(e) => setRoadName(e.target.value)}
          />
        </div>
        <div>
          <label>City Name:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCityName(e.target.value)}
          />
        </div>
        <div>
          <label>District Name:</label>
          <input
            type="text"
            value={district}
            onChange={(e) => setDistrictName(e.target.value)}
          />
        </div>
        <div>
          <label>Customer Photo:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setMyfile(e.target.files[0])}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
         <Link href="/Customer/LogIn">Already have an account? Go to Login page</Link>
      </p>
      </Layout>
    </div>
  );
};

export default RegistrationPage;
