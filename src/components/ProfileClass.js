// create a class component which is currently not use means[deprecated]
// class component it is simple javaScript class

// accept props like this => this.props.name

// state create like this.state = {}
// we can create multiple state in one object no problem
// we cannot directly change the state we use => this.setstate({}) give a new object with updated values

// componentDidMount is best place to fetch Data or make api calls etc.

import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        console.log("child1 constructor is called ");
        this.state = { count: 0, count2: 3, name: "saket" };
    }

    async componentDidMount() {
        // const data = await fetch("https://fakestoreapi.com/products");
        // const response = data.json();
        // console.log("response", response);
        console.log("child1 componentDidMount is called");
        // console.log("comDidMount");
        // this.timer = setInterval(() => {
        //     console.log("ok");
        // }, 1000);

        this.setState({ count: 1 });
    }
    componentDidUpdate() {
        console.log("child componentDidUpdate is called");
    }

    componentWillUnmount() {
        // clearInterval(this.timer);
        console.log("child1 componentWillUnmount is called");
    }

    render() {
        // console.log("class Component", this.props.name);
        // console.log("class Component", this.props.surname);

        // const { name, surname } = this.props;
        // console.log(name, surname);
        console.log("child1 render is called");
        return (
            <>
                <div> hyy saket welcome to learn class component....! </div>{" "}
                <h1>
                    {" "}
                    {this.props.name}, {this.props.surname},{" "}
                </h1>{" "}
                <h1>
                    {" "}
                    {this.state.count}, {this.state.name}, {this.state.count2}{" "}
                </h1>{" "}
                <button
                    onClick={() => {
                        this.setState({
                            count: 2,
                            count2: 4,
                            name: "saket singh patel",
                        });
                    }}>
                    {" "}
                    click{" "}
                </button>{" "}
            </>
        );
    }
}
export default Profile;
