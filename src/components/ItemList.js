import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_LINK } from "../utils/constants";
import { useState } from "react";

const ItemList = ({ item }) => {
  //console.log(items);

  const { name, price, description, imageId, defaultPrice } = item?.card?.info;

  const [btnText, setBtnText] = useState("ADD");

  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item));
    setBtnText("ADDED");
  };

  return (
    <div className="border-b-2 py-3 flex">
      <div className="w-9/12">
        <h1 className="font-bold">{name}</h1>
        <h1 className="font-bold">Rs.{price / 100 || defaultPrice/100}</h1>
        <h3 className="text-sm">{description}</h3>
      </div>
      <div className="w-3/12 relative flex justify-center">
        {imageId ? <img
          className="rounded-xl m-2 w-32 object-cover h-32"
          alt="menu-item"
          src={CDN_LINK + imageId}
        /> : <div className="border-2 w-32 h-32 m-2 rounded-xl"></div>}
        <button
          onClick={() => handleClick(item)}
          className="border-2 py-1 px-6 absolute bottom-0 bg-white text-green-600 font-bold rounded-lg"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default ItemList;
