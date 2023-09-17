

// import '@/styles/globals.css';

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import '@/styles/globals.css'

import { AuthProvider } from './Uits/authContext';

 

export default function App({ Component, pageProps }) {

  return(    <AuthProvider>

  <Component {...pageProps} />

  </AuthProvider>);

}