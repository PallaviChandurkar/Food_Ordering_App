import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{

    constructor(props){
        super(props);
        this.state = {
            productinfo: {
                brand: "Samsung",
                price: 600
            }
        }
        console.log("constructor");
    }

    async componentDidMount() {
        const data = await fetch("https://dummyjson.com/products/1");
        const json = await data.json();
        // console.log(json);
        this.setState({
            productinfo: json
        })
        console.log("componentDidMount")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentwillunmount");
    }

    render() {

        const { brand,price } = this.state.productinfo;

        return (
            <div className="text-center my-10">
                <h1 className="resinfo">About</h1>
                <p>Product Brand: {brand}</p>
                <p>Product Price: {price}</p>
                <User name={"Pallavi Sheela Sudhakar Chandurkar"} location={"Akola Maharashtra"} />
                <UserClass name={"Krishna Sheela Sudhakar Chandurkar"} location={"Akola Maharashtra"} />
                {console.log("render")}
            </div>
        )
    }
}

export default About;