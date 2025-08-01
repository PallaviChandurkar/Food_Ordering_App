import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({itemData}) => {

    const {name,imageId,price,defaultPrice,description} = itemData;

    const cartItems = useSelector((store)=>store.cart.items);

    const isAdded = cartItems.some((item)=>item.id === itemData.id);

    const dispatch = useDispatch();

    const handleAddItem = (itemData) => {
        dispatch(addItem(itemData));
    }

    return (
        <>
            <div data-testid="foodItems" className="flex justify-between border-b-2 border-b-neutral-500 py-4">
                <div className="w-7/12 md:w-9/12">
                     <h1 className="text-lg font-bold">{name}</h1>
                     <p>Rs. {price/100 || defaultPrice/100}</p>
                     <p className="text-sm">{description}</p>
                </div>
                <div className="w-5/12 md:w-3/12 relative">
                    {
                       (!imageId) ? <div className="w-full h-40 border border-neutral-400 rounded-xl"></div> : <img className="w-full h-30 sm:h-40 object-cover rounded-xl" src={IMG_CDN+imageId} />
                    }
                    <button data-testid="addbtn" onClick={()=>handleAddItem(itemData)} className="absolute -bottom-2 left-9 sm:left-16 bg-black text-white p-2 rounded-lg cursor-pointer">{isAdded ? "ADDED" : "ADD +"}</button>
                </div>
            </div>
        </>
    )
}

export default ItemList;