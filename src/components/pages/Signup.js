import { useEffect, useState } from "react";
import userServices from "../../api/services/user";

const Signup = () => {
    const [signupFormData, setSignupFormData] = useState({
        name: "",
        mobileNo: "",
        email: "",
        password: "",
    });

    const { signupUser } = userServices();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupFormData({ ...signupFormData, [name]: value });
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        const { name, mobileNo, email, password } = signupFormData;

        try {
            await signupUser(signupFormData);
        } catch (error) {
            alert("signup unsuccessfull");
            console.log(error);
        }
    };

    console.log("signup form data", signupFormData);

    // if (!mobileNo || !email || !password || !name) {
    //     alert("Please fill in all fields");
    //     return;
    // }

    return (
        <div className="bg-theme-gradient flex justify-center items-center min-h-screen">
            <div className="border-2 border-black bg-white rounded-md p-10 w-[400px]">
                <h2 className="text-[40px] font-bold font-mono">Singup</h2>
                <form onSubmit={submitHandler}>
                    <div className="flex flex-col">
                        <label className="font-semibold ml-1" htmlFor="">
                            Name
                        </label>
                        <input
                            className="border-2 border-slate-400 m-1 outline-none rounded-sm p-0.5"
                            type="text"
                            placeholder="Enter your name"
                            onChange={handleChange}
                            name="name"
                            value={signupFormData.name}
                        />
                        <label className="font-semibold ml-1" htmlFor="">
                            MobileNo
                        </label>
                        <input
                            className="border-2 border-slate-400 m-1 outline-none rounded-sm p-0.5"
                            type="tel"
                            placeholder="Enter your phone no. "
                            onChange={handleChange}
                            name="mobileNo"
                            value={signupFormData.mobileNo}
                        />
                        <label className="font-semibold ml-1" htmlFor="">
                            Email
                        </label>
                        <input
                            className="border-2 border-slate-400 m-1 outline-none rounded-sm p-0.5"
                            type="text"
                            placeholder="Enter your email "
                            onChange={handleChange}
                            name="email"
                            value={signupFormData.email}
                        />
                        <label className="font-semibold ml-1" htmlFor="">
                            Password
                        </label>
                        <input
                            className="border-2 border-slate-400 m-1 outline-none rounded-sm p-0.5"
                            type="text"
                            placeholder="Enter your password"
                            onChange={handleChange}
                            name="password"
                            value={signupFormData.password}
                        />
                        <button
                            className="bg-theme-gradient w-[80px] rounded-[5px] h-[35px] font-semibold mt-4 text-slate-200 font-mono items-center mx-auto
                    ">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
