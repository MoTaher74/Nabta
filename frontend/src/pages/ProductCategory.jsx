import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { categories } from "../assets/assets";
import ProductCard from "../components/ProductCard";

const ProductCategory =()=>{
const {products} = useAppContext();
const {category} = useParams();
const filteredProducts = products.filter((product)=>product.category.toLowerCase() === category);
const searchCategory = categories.find((items)=>items.path === category);

    return(
        <div className="mt-16">
            {searchCategory && (
                <div className="flex flex-col items-end w-max">
                    <h1 className="text-xl md:text-2xl font-medium">{searchCategory.text.toUpperCase()}</h1>
                    <div className="w-25 h-0.5 md:h-1 bg-primary rounded-full"></div>
                </div>
            )}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-7 gap-3 md:gap-6">
                {filteredProducts.map((product, idx) => (
                    <ProductCard key={idx} product={product} />
                ))}
            </div>
            <div className="w-full h-0.5 bg-black rounded-full mt-30"></div>
        </div>
    )
}

export default ProductCategory;