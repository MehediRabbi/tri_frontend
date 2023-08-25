import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from './Layout/layout';

export default function Home() {
  return (
    <>
      <Layout page="Home">

      <div className="bg-blue-500 text-white p-4">
This is my component!
</div>

        <h1>Home Page</h1>
        <Image src="/57.jpeg" alt="click_me" width={500} height={300} />
        
        <div>
          <Link href="/Customer/LogIn">Login</Link>
        </div>

      </Layout>
    </>
  );
}