import ProductCard from "../components/ProductCard";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";


const ProductPage = () => {
    const {products,searchQuery} = useAppContext();
    const[filtered,setFiltered] = useState([]);
    useEffect(()=>{
        if(searchQuery.length > 0){
            setFiltered(products.filter((product)=>product.name.toLowerCase().includes(searchQuery.toLowerCase())));
        }else{
            setFiltered(products);
        }

    },[products,searchQuery])

    // function used for show and filtered products
    const filterProducts = filtered.filter((product)=>product.inStock).map((producted,idx)=>(<ProductCard key={idx} product={producted} />));
    return (
        <div className="mt-16 flex flex-col ">
            <div className="flex flex-col items-end w-max">
                <h1 className="text-xl md:text-2xl font-medium uppercase">All Products</h1>
                <div className="w-25 h-0.5 md:h-1 bg-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-7 gap-3 md:gap-6 ">
                {filterProducts}
            </div>
            <div className="w-full h-0.5 bg-black rounded-full mt-30"></div>
        </div>
    )
}

export default ProductPage;