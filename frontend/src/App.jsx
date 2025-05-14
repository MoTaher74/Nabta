import Navbar from "./components/Navbar";

import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";
import React from "react";
import { Suspense } from "react";

const ProductPage = React.lazy(() => import("./pages/ProductPage"));
const ProductCategory = React.lazy(() => import("./pages/ProductCategory"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Home = React.lazy(() => import("./pages/Home"));
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

  
<Suspense fallback={<div className="min-h-[500px]">Loading...</div>}>
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/product" element={<ProductPage/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/product/:category" element={<ProductCategory/>}/>
<Route path="/product/:category/:id" element={<ProductDetails/>}/>
<Route path="/cart" element={<Cart/>}/>
  </Routes>
  </Suspense>
</div>
<Footer/>
    </>
  )
};
export default App;