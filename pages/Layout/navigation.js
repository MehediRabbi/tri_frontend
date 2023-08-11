import Link from 'next/link'
export default function Navigation(){
return(
    <>
<h4><Link href='about'>Home</Link>
<Link href='about'>About</Link>



<Link href='/Customer/ViewProduct'>Search_Product</Link></h4>
    </>

);
}