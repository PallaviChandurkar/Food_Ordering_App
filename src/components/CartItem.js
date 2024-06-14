import { CDN_LINK } from "../utils/constants";

const CartItem = ({foodItem}) => {
    console.log(foodItem);

    const { name, imageId, price, defaultPrice } = foodItem?.card?.info;

    return (
        <div className="m-3">
        <div className="w-6/12 p-3 m-auto flex justify-between border border-gray-500 rounded-lg">
            <div>
            <img className="w-36 rounded-lg" alt="Food-Image" src={CDN_LINK+imageId} />
            <h1 className="text-sm">{name}</h1>
            </div>
            <div>
            <h3>Rs. {price/100 || defaultPrice/100}</h3>
            </div>
        </div>
        </div>
    )
};

export default CartItem;