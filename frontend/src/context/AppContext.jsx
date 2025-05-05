import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import { toast } from "react-hot-toast";


export const AppContext = createContext();
export const AppContextProvider = ({children})=>{

    const currency = import.meta.VITE_CURRENCY;


    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [seller,setSeller] = useState(false);
    const [showUserLogin,setShowUserLogin] = useState(false);
    const [products,setProducts] = useState([]);
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem("cartItems");
        return saved ? JSON.parse(saved) : {};
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);
    const [searchQuery,setSearchQuery] = useState({});
// fetch All products
    const fetchProducts = async ()=>{
        setProducts(dummyProducts)
    }
// Add products to cart

const addToCart = (itemId)=>{
    let cardData = structuredClone(cartItems);

    if(cardData[itemId]){
        cardData[itemId] += 1 ;
    }else{
        cardData[itemId] = 1;
    }

    setCartItems(cardData);
    toast.success("Added To Cart");
}

// Update cart items Quantity

const updateCartItem=(itemId,nums)=>{
let cartData = structuredClone(cartItems);
cartData[itemId] += nums;
setCartItems(cartData);
toast.success("Cart Updated")

}

// remove from cart
const removeFromCart = (itemId)=>{
    let cartData = structuredClone(cartItems);
    if(cartData[itemId]){
       cartData[itemId] -= 1;
       if(cartData[itemId] === 0){
        delete cartData[itemId];
       } 
    }

  
    toast.success("Removed From Cart");
    setCartItems(cartData);
}

// get cart items count 

const getCartItemsCount = () => {
    let count = 0;
    let cartData = structuredClone(cartItems);
    for(let id in cartData){
        count += cartData[id];
    }
    return count;
}

// get cart total amount

const getCartTotalAmount = () => {
    let totalAmount = 0;
    let cartData = structuredClone(cartItems);
    for(let id in cartData){
        let item = products.find((product) => product._id === id);

        if(cartData[id] >0){
            totalAmount += item.offerPrice * cartData[id];
        }

    }
    return Math.floor(totalAmount * 100) /100;
}


    useEffect(()=>{
        fetchProducts();
    },[])

    const value = {searchQuery,setSearchQuery,navigate,user,setSeller,setUser,seller,showUserLogin,setShowUserLogin,products,currency,addToCart,updateCartItem,removeFromCart,cartItems,setCartItems,getCartItemsCount,getCartTotalAmount};

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}

export const useAppContext = () => {
    return useContext(AppContext);

}