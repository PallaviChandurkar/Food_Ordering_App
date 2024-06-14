import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 1,
            count2: 0
        }
        console.log(props.name + "constructor");
    }

    render() {

        const { name, location } = this?.props;

        return (
            <div className="user-st">
                <p>Name: {name}</p>
                <p>Location: {location}</p>
                <p>Count: {this.state.count}</p>
                <p>Count2: {this.state.count2}</p>
                <button onClick={()=> { 
                    this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count2 + 1
                })
                }}>Increement</button>
                <p>UserClass (class component)</p>
                {console.log(name + "render")}
            </div>
        )
    }
}

export default UserClass;