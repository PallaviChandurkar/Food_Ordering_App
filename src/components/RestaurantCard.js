import { useContext } from "react";
import { IMG_CDN } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {

    const { resData } = props;
    const { name,costForTwo,cuisines,avgRating,cloudinaryImageId,id } = resData?.card?.card?.info;

    const { loggedInUser } = useContext(UserContext);

    return (
        <>
            <Link data-testid="resCards" to={`/restaurant/${id}`}>
            <div className="group w-[250px] my-3 transition-transform duration-200 ease-in-out hover:scale-95 relative">
                <div className="relative">
                <img className="w-full h-[200px] object-cover rounded-xl" src={IMG_CDN+cloudinaryImageId} alt="food-card" />
                <div className="absolute top-0 left-0 h-20 z-20 w-full bg-gradient-to-b from-black to-[#1b1e2400] rounded-t-xl"></div>
                </div>
                <div className="p-2">
                    <h3>{name}</h3>
                    <p>{avgRating} stars</p>
                    <p>25 - 30 mins</p>
                    <p className="truncate">{cuisines.join(" ,")}</p>
                    <p>{costForTwo}</p>
                    {/* <p>{loggedInUser}</p> */}
                </div>

                {props.promoted && (
                    <h1 className="absolute top-0 right-3 text-white p-2 m-0 z-30">Promoted</h1>
                )}
             </div>
            </Link>
        </>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                    <RestaurantCard {...props} promoted={true} />
            </>
        )
    }
}

export default RestaurantCard;