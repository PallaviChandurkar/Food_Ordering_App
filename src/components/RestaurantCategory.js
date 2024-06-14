import { IoIosArrowDown } from "react-icons/io";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({items, showItems, setShowIndex}) => {

    const { title, itemCards } = items.card.card;
    //const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowIndex();
    }
    //console.log(itemCards);

    return (
        <div className="p-3">
        <div onClick={handleClick} className="flex justify-between cursor-pointer border-b-4 py-2">
            <h1 className="font-bold text-lg">{title}<span>({itemCards.length})</span></h1>
            <IoIosArrowDown />
        </div>
        <div>
            {showItems && itemCards.map((menu) => <ItemList key={menu?.card?.info?.id} item={menu} />)}
        </div>
        </div>
    )
}

export default RestaurantCategory;