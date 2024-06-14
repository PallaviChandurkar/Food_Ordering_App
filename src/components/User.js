import { useState } from "react";

const User = (props) => {

    const {name, location} = props;

    const [count,setCount] = useState(1);

    return (
        <div className="user-st">
            <p>Name: {name}</p>
            <p>Location: {location}</p>
            <p>Count: {count}</p>
            <button onClick={()=> { 
                setCount(count+1);
             }}>Increement</button>
            <p>User (function Component)</p>
        </div>
    )
}

export default User;