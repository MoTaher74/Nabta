import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";
import ProductPage from "./pages/ProductPage";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";

const App = ()=>{
const isSellerPath = useLocation().pathname.includes('seller');
const {showUserLogin} = useAppContext();
  return(
    <>
    {isSellerPath? null : <Navbar/>}
    {showUserLogin? <Login/> : null}

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
<Route path="/product" element={<ProductPage/>}/>
<Route path="/product/:category" element={<ProductCategory/>}/>
<Route path="/product/:category/:id" element={<ProductDetails/>}/>
  </Routes>
</div>
<Footer/>
    </>
  )
};
export default App;