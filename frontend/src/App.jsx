import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = ()=>{
const isSellerPath = useLocation().pathname.includes('seller');

  return(
    <>
    {isSellerPath? null : <Navbar/>}

    <Toaster 
    position="top-center"
    toastOptions={{
      style: {
        zIndex: 999999,
      },
  }}
/>


<div className={`${isSellerPath ?"":"px-6 md:px-16 lg:px-24 xl:px-32"}`}>
  <Routes>
<Route path="/" element={<Home/>}/>
  </Routes>
</div>
<Footer/>
    </>
  )
};
export default App;