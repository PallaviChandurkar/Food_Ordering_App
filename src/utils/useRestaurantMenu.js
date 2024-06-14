import { useEffect, useState } from "react";
import { RESINFO_API } from "./constants";

const useRestaurantMenu = (resid) => {

    const [resinfo, setresinfo] = useState(null);

    useEffect(()=>{
        fetchedResInfo();
    },[]);

    const fetchedResInfo = async() => {
        const data = await fetch(RESINFO_API + resid);
        const json = await data.json();
        setresinfo(json);
        //console.log(json);
    }

    return resinfo;
}

export default useRestaurantMenu;