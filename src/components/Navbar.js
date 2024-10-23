import { Link } from "react-router-dom";
import { useState } from "react";
import useOnline from "../utils/useOnline";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isOnline = useOnline();

    return (
        <div className="flex justify-between bg-cyan-900">
            <img
                className="rounded-full w-[70px]"
                src="./images/download.jpeg"
                alt="logo"
            />
            {isOnline ? (
                <div className="text-green-500 font-bold text-[20px] ">
                    online✅{" "}
                </div>
            ) : (
                <div className="text-red-600 font-bold text-[20px]  ">
                    offline🔴{" "}
                </div>
            )}{" "}
            <div className="flex font-semibold text-white gap-x-6 m-6">
                <Link to="/">
                    <p> Home </p>
                </Link>{" "}
                <Link to="/about">
                    <p> About </p>
                </Link>{" "}
                <Link to="/contact">
                    <p> Contact </p>
                </Link>
            </div>
            {isLoggedIn ? (
                <button
                    className="bg-theme-gradient w-[80px] rounded-[5px] h-[35px] font-semibold mt-4 mr-7 text-slate-200 font-mono"
                    onClick={() => setIsLoggedIn(false)}>
                    Logout
                </button>
            ) : (
                <Link to="/signup">
                    <button
                        className="bg-theme-gradient w-[80px] rounded-[5px] h-[35px] font-semibold mt-4 mr-7 text-slate-200 font-mono"
                        onClick={() => setIsLoggedIn(true)}>
                        Signup
                    </button>
                </Link>
            )}
        </div>
    );
};
export default Navbar;
