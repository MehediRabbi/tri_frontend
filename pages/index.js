//import Head from 'next/head'
import React from 'react';
import Image from 'next/image' // Import the Image component
//import { Inter } from 'next/font/google'
import Link from 'next/link';
import Layout from './Layout/layout';



//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

    <Layout page="Home">
    
    
      
      <h1>Home Page</h1>
      {}
      <Image src="/57.jpeg" alt="click_me" width={500} height={300} />

<div><Link href="/Customer/LogIn">Login</Link></div>
      
      </Layout>
    </>
  );
}
