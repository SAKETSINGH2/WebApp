import React from "react";

class Profiles extends React.Component {
    constructor(props) {
        super(props);
        console.log("child2 constructor is called ");
        this.state = { count: 0, count2: 3, name: "saket" };
    }
    async componentDidMount() {
        // const data = await fetch("https://fakestoreapi.com/products");
        // const response = data.json();
        // console.log("response", response);
        console.log("child2 componentDidMount is called");
        // console.log("comDidMount");
        // this.timer = setInterval(() => {
        //     console.log("ok");
        // }, 1000);
    }
    componentWillUnmount() {
        // clearInterval(this.timer);
        console.log("child2 componentWillUnmount is called");
    }

    render() {
        // console.log("class Component", this.props.name);
        // console.log("class Component", this.props.surname);

        // const { name, surname } = this.props;
        // console.log(name, surname);
        console.log("child2 render is called");
        return (
            <>
                <div>hyy saket welcome to learn class component....!</div>
                <h1>
                    {this.props.name} , {this.props.surname} ,{" "}
                </h1>
                <h1>
                    {this.state.count} , {this.state.name} , {this.state.count2}
                </h1>
                <button
                    onClick={() => {
                        this.setState({
                            count: 2,
                            count2: 4,
                            name: "saket singh patel",
                        });
                    }}>
                    {" "}
                    click
                </button>
            </>
        );
    }
}
export default Profiles;
