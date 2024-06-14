import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import MenuShimmer from "./MenuShimmer";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  const resinfo = useRestaurantMenu(resid);

  if (resinfo === null) return <MenuShimmer />;

  const { name, avgRatingString, costForTwoMessage, areaName, cuisines } =
    resinfo?.data?.cards[2]?.card?.card?.info;

  const rescategory =
    resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const category = rescategory.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  //console.log(category);

  return (
    <div className="w-6/12 m-8 mx-auto">
      <h1 className="font-bold text-2xl">{name}</h1>
      <div className="font-bold border-2 my-3 py-3 px-2 rounded-3xl shadow-xl">
        <h3 className="mx-2 flex">
          <FaStar />
          <span className="">{avgRatingString} - ratings</span>
        </h3>
        <h3 className="mx-2">{costForTwoMessage}</h3>
        <h3 className="mx-2">{areaName}</h3>
      </div>
      <div>
        {category.map((item, index) => (
          <RestaurantCategory
            key={item.card.card.title}
            items={item}
            showItems={index === showIndex && true}
            setShowIndex={()=> setShowIndex(index) }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
