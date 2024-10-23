import Profile from "./ProfileClass";

const About = () => {
    return (
        <>
            <h1 className="bg-yellow-600">hey this is About page</h1>{" "}
            {/* <Profile /> */}
        </>
    );
};

export default About;

// import { Component } from "react";
// import Profiles from "./ProfileClasss";

// class About extends Component {
//     constructor(props) {
//         super(props);

//         console.log("parent constructor is called");
//     }

//     componentDidMount() {
//         console.log("parent componentDidMount is called");
//     }

//     componentDidUpdate() {
//         console.log("parent componentDidUpdate is called");
//     }

//     componentWillUnmount() {
//         console.log("parent componentWillUnmount is called");
//     }

//     render() {
//         console.log("parent render is called");

//         return (
//             <>
//                 <h1 className="bg-yellow-600">hey this is About page</h1>{" "}
//                 <Profile />
//                 <Profiles />
//             </>
//         );
//     }
// }

// export default About;
