import { assets } from "../assets/assets";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative ">
     <img src={assets.main_banner_bg} alt="banner one" className="w-full hidden md:block"/>
     <img src={assets.main_banner_bg_sm} alt="banner two" className="w-full  md:hidden"/>
  <div className="absolute inset-0 mt-10 bottom-10 text-center  md:top-20 md:left-20   flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg-pl-24 ">
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-85 lg:max-w-105 ">Freshness You Can Trust,
     Savings You will Love!</h1>
     <div className="flex items-center  space-x-4  mt-6 font-medium ">
       <Link to={'product'} className=" group flex gap-3 items-center text-white bg-primary hover:bg-secondry duration-200 p-3 rounded-lg">Shop Now
       <img src={assets.white_arrow_icon} alt="arrow" className="md:hidden transition group-foucus:translate-x-1:"/>
       </Link>
       <Link to={'deals'} className=" group hidden md:flex gap-3 px-9 p-3 cursor-pointer items-center"> Explore deals
       <img src={assets.black_arrow_icon} alt="arrow" className=" transition group-hover:translate-x-1:"/>
       </Link>

     </div>
  </div>
    </header>
  );
}
export default Header;