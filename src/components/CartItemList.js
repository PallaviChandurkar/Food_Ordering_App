import { useDispatch } from "react-redux";
import { IMG_CDN } from "../utils/constants";
import { removeItem } from "../utils/cartSlice";

const ItemList = ({itemData}) => {

    const {name,imageId,price,defaultPrice,id} = itemData;
    
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(removeItem(id));
    }

    return (
        <>
            <div data-testid="cartItemList" className="flex justify-between items-center border-b-2 border-b-neutral-500 py-4">
                <div className="flex flex-wrap gap-5">
                    <div>
                        {
                            (!imageId) ? <div className="w-[80px] h-[80px] border border-neutral-400 rounded-xl"></div> : <img className="w-[80px] h-[80px] object-cover rounded-xl" src={IMG_CDN+imageId} />
                        }
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">{name}</h1>
                        <p>Rs. {price/100 || defaultPrice/100}</p>
                    </div>
                </div>
                <div>
                     <button onClick={()=>handleDelete(id)} className="bg-black text-white p-2 rounded-lg cursor-pointer">Remove from Cart</button>
                </div>
            </div>
        </>
    )
}

export default ItemList;