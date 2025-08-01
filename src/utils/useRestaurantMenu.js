// import { useEffect, useState } from "react";

// function useRestaurantMenu(resId){
//     const [resMenu,setresMenu] = useState([]);
//     useEffect(()=>{
//         fetchMenu();
//     },[]);
//     const fetchMenu = async() => {
//         const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.152192&lng=72.844255&restaurantId="+resId);
//         const json = data.json();
//         console.log(json);
//         setresMenu(json.data);
//     }
//     return resMenu;
// }

// export default useRestaurantMenu;