import { Outlet } from "react-router-dom";
import Navigasi from "../Fragments/Navigasi";
import Footer from "../Fragments/Footer";



const Beranda = () => {
    
    return ( 
    <>
    <Navigasi/>
    <Outlet/>
    <Footer/>
    </>
  );
}


export default Beranda