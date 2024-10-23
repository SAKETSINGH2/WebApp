import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";

const Body = () => {
    const [text, setText] = useState(false);
    const [data, setData] = useState(null);

    const isOnline = useOnline();
    // console.log(isOnline);

    useEffect(() => {
        getData();
    }, []);
    // console.log("Data", data);
    async function getData() {
        const data = await fetch("https://fakestoreapi.com/products");
        const response = await data.json();
        // console.log(response);
        setData(response);
    }

    // console.log("Render");

    if (!data) {
        return <Shimmer />;
    }

    if (!isOnline) {
        return (
            <div className="flex justify-center font-bold text-[40px]">
                you are offline , please connect to the internet
            </div>
        );
    }

    return (
        // <div className="card-shape">
        //     {/* {text ? (
        //         <h1 onClick={() => setText(false)}>done</h1>
        //     ) : (
        //         <h1 onClick={() => setText(true)}>this is body</h1>
        //     )} */}

        //     {data?.map((one) => {
        //         return (
        //             <div className="shop-card">
        //                 <img src={one?.image} alt="" />
        //                 {/* <p>{one.title}</p> */}
        //             </div>
        //         );
        //     })}
        // </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {data?.map((one, index) => {
                return (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-xs">
                        <img
                            src={one?.image}
                            alt="Product"
                            className="w-full h-40 object-contain"
                        />
                        <div className="p-2">
                            <h2 className="text-md font-medium mb-1 text-gray-800">
                                {one?.title}
                            </h2>
                            <p className="text-gray-600 text-sm">
                                {one?.description}
                            </p>
                            <button className="mt-2 bg-teal-500 text-white py-1 px-3 rounded hover:bg-teal-600 transition-colors duration-300">
                                View More
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default Body;
