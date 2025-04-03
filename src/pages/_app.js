import "@/styles/globals.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, 
    });
  }, []);
  
  return <Component {...pageProps} />;
}
