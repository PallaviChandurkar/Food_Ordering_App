import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_API } from "../utils/constants";
import { withPromotedLabel } from "./RestaurantCard";
// import UserContext from "../utils/userContext";

const Body = () => {

    const [listOfrestaurants, setlistOfrestaurants] = useState([]);

    const [filteredrestaurants, setFilteredrestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // const {loggedInUser, setUserName} = useContext(UserContext);

    const fetchdata = async() => {
        const data = await fetch(RES_API);
        const json = await data.json();
        let cards = json?.data?.cards;
        let newCards = cards.filter((card)=> card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");
        setlistOfrestaurants(newCards);
        setFilteredrestaurants(newCards);
    }

    useEffect(()=>{
       fetchdata();
    },[]);

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus) return <div>Sorry!!! Network Error</div>

    if(listOfrestaurants.length === 0){
        return <ShimmerUI /> 
    }
 
    return (
        <div className="w-8/12 sm:w-10/12 mx-auto">
            <div>
                <div className="flex flex-wrap gap-5 justify-center my-5">
                    <input data-testid="searchInput" className="px-3 py-1 border-2 border-neutral-400 rounded-md focus:outline-none" type="text" placeholder="Enter the dish" onChange={
                        (e)=>setSearchText(e.target.value) }  />
                    <button className="bg-neutral-300 px-2 py-1 rounded-md cursor-pointer" onClick={()=>{
                        const searchData = listOfrestaurants.filter((data)=>data?.card?.card?.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredrestaurants(searchData);}
                    }>Search</button>
                    <button onClick={()=> {
                            const filterdata = listOfrestaurants.filter((res)=>res?.card?.card?.info.avgRating >= 4.5);
                            setFilteredrestaurants(filterdata);
                    }} className="bg-neutral-300 px-2 py-1 rounded-md cursor-pointer">Top Rated Restaurants</button>
                    {/* <div>
                        <label>User: </label>
                        <input className="px-3 py-1 border-2 border-neutral-400 rounded-md focus:outline-none" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
                    </div> */}
                </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center my-8">
                {
                    filteredrestaurants.map((restaurant) => 
                    (restaurant?.card?.card?.info?.promoted ? <RestaurantCardPromoted key={restaurant?.card?.card?.info?.id} resData={restaurant} /> :
                         <RestaurantCard key={restaurant?.card?.card?.info?.id} resData={restaurant} />))
                }
            </div>
        </div>
    )
}

export default Body;