// import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/userContext";

class About extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent ComponentDidMount");
    }

    componentDidUpdate(){
        console.log("Parent ComponentDidUpdate");
    }

    componentWillUnmount(){
        console.log("Parent ComponentWillUnmount");
    }

    render(){
        console.log("Parent Render");

        return(
            <>
              <div className="text-center my-20">
                <h1>About Us Page</h1>
                {/* <User name={"Pallavi Patil(function)"} location={"Akola"} /> */}
                <UserClass name={"First "} />
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser})=> <h1>{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <UserClass name={"Second "}  />
                </div>  
            </>
        )
    }
}

export default About;