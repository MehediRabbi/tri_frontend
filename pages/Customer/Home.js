
import Image from 'next/image';
import Link from 'next/link';
import Layout from "../Layout/layout";

const Home = () => {
    return (
      <div>
        <Layout page="">
        
       
        <h1>Hi, Welcome to your profile</h1>
        <div>
        <Image
          src="/boypic.jpg" 
          alt="Your Profile Photo"
          width={200} 
          height={200} 
        />
      </div>
      <div><Link href='/Customer/ViewProduct'>Buing Products</Link></div>
      <div><Link href='/Customer/UpdateProfile'>Update_Profile</Link></div>
      <div><Link href='/Customer/getallproduct'>View_Products</Link></div>
      <div><Link href='about'>View_carts</Link></div>
     <div><Link href='about'>View_Wishlist</Link></div>
     <div><Link href='about'>Delete Product</Link></div>
      
    
     </Layout>
      </div>
    );
  };

export default Home