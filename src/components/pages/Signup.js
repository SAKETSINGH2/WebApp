import { useEffect, useState } from "react";
import userServices from "../../api/services/user";
import { toast } from "react-toastify";
import Home from "../Home";
import Body from "../body";

const Signup = () => {
    const [signupFormData, setSignupFormData] = useState({
        name: "",
        mobileNo: "",
        email: "",
        password: "",
    });

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const { signupUser } = userServices();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupFormData({ ...signupFormData, [name]: value });
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        let { name, mobileNo, email, password } = signupFormData;

        if (!mobileNo || !email || !password || !name) {
            toast.error("all field require", {
                style: {
                    backgroundColor: "black",
                    color: "#fff",
                },
            });
            return;
        }

        try {
            const { message, success } = await signupUser(signupFormData);
            if (success) {
                toast.success("user signup successfully 💕", {
                    style: {
                        backgroundColor: "darkgreen",
                        color: "#fff",
                    },
                });
                setIsUserLoggedIn(true);
            } else {
                toast.error(message);
            }
        } catch (error) {
            if (error) {
                toast.error(error.response.data.message || error.message);
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        }
    };

    return isUserLoggedIn ? (
        <Body />
    ) : (
        <div className="bg-richblack-800 flex justify-center items-center min-h-screen">
            <div className="border-1 rounded-lg p-10 w-[400px]  shadow-richblue-300 shadow-inner">
                <h2 className="text-[25px] font-semibold font-mono text-richblack-50 mb-4">
                    {" "}
                    Create account{" "}
                </h2>{" "}
                <form onSubmit={submitHandler}>
                    <div className="flex flex-col">
                        <label
                            className="font-semibold ml-1 text-richblue-100"
                            htmlFor="">
                            Name{" "}
                        </label>{" "}
                        <input
                            className="border-0.5  m-1 outline-none rounded-lg p-2 px-2 bg--800 bg-richblack-700 font-semibold text-white border-richblue-200 text-[16px] shadow-md shadow-richblue-300"
                            type="text"
                            placeholder="Enter your name"
                            onChange={handleChange}
                            name="name"
                            value={signupFormData.name}
                        />{" "}
                        <label
                            className="font-semibold ml-1 text-richblue-100"
                            htmlFor="">
                            MobileNo{" "}
                        </label>{" "}
                        <input
                            className="border-0.5 m-1 outline-none rounded-lg p-2 px-2 bg--800 bg-richblack-700 font-semibold  text-white border-richblue-200 text-[16px] shadow-md shadow-richblue-300"
                            type="tel"
                            placeholder="Enter your phone no. "
                            onChange={handleChange}
                            name="mobileNo"
                            value={signupFormData.mobileNo}
                        />{" "}
                        <label
                            className="font-semibold ml-1 text-richblue-100"
                            htmlFor="">
                            Email{" "}
                        </label>{" "}
                        <input
                            className="border-0.5 m-1 outline-none rounded-lg p-2 px-2 bg--800 bg-richblack-700 font-semibold text-white border-richblue-200 text-[16px] shadow-md shadow-richblue-300"
                            type="text"
                            placeholder="Enter your email "
                            onChange={handleChange}
                            name="email"
                            value={signupFormData.email}
                        />{" "}
                        <label
                            className="font-semibold ml-1 text-richblue-100"
                            htmlFor="">
                            Password{" "}
                        </label>{" "}
                        <input
                            className="border-0.5  m-1 outline-none rounded-lg p-2 px-2 bg--800 bg-richblack-700 font-semibold text-white border-richblue-200 text-[16px] shadow-md shadow-richblue-300"
                            type="text"
                            placeholder="Enter your password"
                            onChange={handleChange}
                            name="password"
                            value={signupFormData.password}
                        />{" "}
                        <button
                            className="bg-richblack-600 w-[100px] rounded-[5px] h-[35px] font-semibold mt-4 text-slate-200 font-mono items-center mx-auto
        ">
                            Submit{" "}
                        </button>{" "}
                    </div>{" "}
                </form>{" "}
            </div>{" "}
        </div>
    );
};

export default Signup;
