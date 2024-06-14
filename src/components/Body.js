import { Link } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import useOnlineStatus from "../utils/useOnlineStatus";
import { MENU_API } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(null);

  const [filterRestaurants, setFilterRestaurants] = useState(null);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchedData();
  }, []);

  const onlineStatus = useOnlineStatus();

  const fetchedData = async () => {
    const data = await fetch(MENU_API);
    const json = await data.json();
    //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilterRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setlistOfRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (filterRestaurants === null) return <ShimmerUI />;

  return (
    <div>
      {onlineStatus === false ? (
        <h1 className="text-center text-2xl py-5">Seems you are Offline ? Please switch on the internet!!!!</h1>
      ) : (
        <div className="m-10">
          <div className="text-center my-3">
            <input
              type="text"
              className="border border-black py-2 px-4 m-2"
              value={searchText}
              placeholder="Enter Restaurant Name"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="p-2 m-2 bg-slate-500 text-white cursor-pointer"
              onClick={() => {
                const searchData = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilterRestaurants(searchData);
              }}
            >
              Search
            </button>
            <button
              className="py-2 px-4 m-2 bg-slate-500 text-white cursor-pointer"
              onClick={() => {
                const filterData = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilterRestaurants(filterData);
              }}
            >
              Filter
            </button>
          </div>
          <div className="flex flex-wrap justify-center">
            {filterRestaurants.map((res) => (
              <Link to={"/restaurantinfo/" + res.info.id} key={res.info.id}>
                <Card resData={res} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
