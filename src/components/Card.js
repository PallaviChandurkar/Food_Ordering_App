const Card = (props) => {
    const { resData } = props;
  
    const {
      name,
      areaName,
      costForTwo,
      cuisines,
      avgRatingString,
      cloudinaryImageId,
    } = resData?.info;
  
    return (
      <div className="m-3 w-72 cursor-pointer">
      <div className="hover:w-64">
        <img
          className="w-64 h-52 rounded-3xl object-cover hover:w-60 drop-shadow-lg"
          alt="res-image"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
        <h3 className="font-bold text-lg py-1">{name}</h3>
        <h4>Rating - {avgRatingString} star</h4>
        <p>{costForTwo}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{areaName}</p>
      </div>
      </div>
    );
  };
  
  export default Card;
  