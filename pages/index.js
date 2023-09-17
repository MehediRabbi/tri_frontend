import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from './Layout/layout';

export default function Home() {
  return (
   
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
  
        <h1 className="text-4xl font-bold">Home Page</h1>
        <Image src="/57.jpeg" alt="click_me" width={500} height={300} />

        <div>
          <Link href="/Customer/LogIn">
            <button className="btn btn-primary">
              Login
            </button>
          </Link>
        </div>
      </div>
   
  );
}
