import { useParams } from "react-router-dom";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useEffect, useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
import { RES_MENU_API } from "../utils/constants";
import ShimmerUIMenu from "./ShimmerUIMenu";

const RestaurantMenu = () => {

    const [resMenu,setresMenu] = useState([]);

    const [showIndex,setshowIndex] = useState(null);

    const { resId } = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch(RES_MENU_API+resId);
        const json = await data.json();
        setresMenu(json.data.cards);
    }

    const resMenuData = resMenu.find((resData)=> resData?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");

    let itemCategory = [];

    if(resMenu.length > 0 && resMenu[resMenu.length-1]?.groupedCard){
         itemCategory = resMenu[resMenu.length-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    }

    const menuCategory = itemCategory.filter((menuTypes)=>
        menuTypes?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || 
        menuTypes?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");

    if(resMenu.length == 0 ) return <ShimmerUIMenu/> ;

    return (
        <>
            <div className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto my-10">
                <p className="text-3xl font-bold">{resMenuData?.card?.card?.info?.name}</p>
                <div className="flex gap-10 my-3 font-bold">
                    <div className="flex gap-2 items-center">
                    <p>{resMenuData?.card?.card?.info?.avgRating}</p>
                    <p className="text-amber-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    </p>
                    </div>
                    <p>{resMenuData?.card?.card?.info?.costForTwoMessage}</p>
                </div>
            </div>
            <div className="mb-24">
                {
                    menuCategory.map((resMenuItem,index)=> <RestaurantCategory key={resMenuItem?.card?.card?.title} title={resMenuItem?.card?.card?.title}
                     itemCards={resMenuItem?.card?.card?.itemCards || resMenuItem?.card?.card?.categories}
                     showItems={index===showIndex && true} setshowItems={()=>setshowIndex(index)} />)
                }
            </div>
        </>
    )
}

export default RestaurantMenu;