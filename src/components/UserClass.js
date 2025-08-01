import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count:0
        }
        console.log(`${this.props.name} Constructor`)
    }

    componentDidMount(){
        console.log(`${this.props.name} ComponentDidMount`);
    }

    componentDidUpdate(){
        console.log(`${this.props.name} ComponentDidUpdate`);
    }

    componentWillUnmount(){
        console.log(`${this.props.name} ComponentWillUnmount`);
    }

    render(){

        console.log(`${this.props.name} Render`)
        const {name,location} = this.props;

        return (
            <>
                <p>Name: {name}</p>
                <p>Location: {location}</p>
                <p>Count: {this.state.count}</p>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1
                    });
                }}>Increement Count</button>
            </>
        )
    }
}

export default UserClass;