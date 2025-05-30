import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";


const Categories = () => {
    const {navigate} = useAppContext();
const renderCategories = categories.map((category, idx) => (

    <div className="group flex flex-col items-center justify-center py-5 px-3 gap-2 rounded-lg cursor-pointer " 
    key={idx} style={{background: category.bgColor}}
    onClick={()=>{
        navigate(`/product/${category.path}`);

        scrollTo(0,0);
    }}
    >
    <img src={category.image} alt="" className="group-hover:scale-110 transition max-w-28"/>
    <p className="text-sm font-medium">{category.text}</p>
</div>
));



return (
    <div className="mt-16">
    <p className="text-2xl md:text-3xl font-medium">Categories</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-7 gap-5 ">
        {renderCategories}
    </div>
</div>
    )
}

export default Categories;