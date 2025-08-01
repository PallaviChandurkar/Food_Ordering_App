import { useState } from "react";


const User = ({name,location}) => {

    const [count,setCount] = useState(0);

    function increementHandler(){
        setCount((prev)=>prev+1);
    }

    return (
        <>
            <p>Name: {name}</p>
            <p>Location: {location}</p>
            <p>Count: {count}</p>
            <button onClick={increementHandler}>Increement Count</button>
        </>
    )
}

export default User;