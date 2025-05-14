import ProductCard from "../components/ProductCard";
import Paginator from "../components/ui/Paginator";
import { useAppContext } from "../context/AppContext";
import { useEffect, useMemo, useState } from "react";


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
    const [page,setPage]=useState(1);
    const productsPerPage = 10;
    const totalPge = Math.ceil(filtered.length / productsPerPage);
    console.log(totalPge)

    const onClickPrev =()=>{
        setPage(prev => prev - 1);
    }
    const onClickNext =()=>{
        setPage(prev => prev + 1);
    }
    // function used for show and filtered products& Paginations
    const filterProducts = useMemo(()=>{
        return filtered.filter((product)=>product.inStock)
    .slice((page - 1) *productsPerPage, page * productsPerPage)
    .map((producted,idx)=>(<ProductCard key={idx} product={producted} />));
    },[filtered,page,productsPerPage])
    console.log(filterProducts);
    return (
        <div className="mt-5 flex flex-col ">
            <div className="flex flex-col items-end w-max">
                <h1 className="text-xl md:text-2xl font-medium uppercase">All Products</h1>
                <div className="w-25 h-0.5 md:h-1 bg-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-7 gap-3 md:gap-6 ">
                {filterProducts}
            </div>

           <div className="mt-5">
             <Paginator page={page} pageCount={totalPge} onClickPrev={() => onClickPrev()} total={filtered.length} onClickNext={() => onClickNext()} />
           </div>
            <div className="w-full h-0.5 bg-black rounded-full mt-30"></div>
        </div>
    )
}

export default ProductPage;