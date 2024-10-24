import { useForm } from "react-hook-form";
import userServices from "../../api/services/user";
import { toast } from "react-toastify";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // console.log("register", register);

    const { loginUser } = userServices();

    const onSubmit = async (data) => {
        try {
            await loginUser(data);
            toast.success("user login successfull");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="bg-richblack-800 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-[30px] mono font-bold m-2 text-richblue-100">
                Login
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col border-0.5 shadow-richblue-25 shadow-md p-10 rounded-md w-[400px]">
                    <label
                        className="font-semibold ml-1 text-richblue-100"
                        htmlFor="">
                        MobileNo:{" "}
                    </label>
                    <input
                        placeholder="Enter your MobileNo."
                        className="border-0.5  m-1 outline-none rounded-lg p-2 px-2 bg--800 bg-richblack-700 font-semibold text-white border-richblue-200 text-[16px] shadow-md shadow-richblue-300"
                        {...register("mobileNo", {})}
                    />
                    <label
                        className="font-semibold ml-1 text-richblue-100"
                        htmlFor="">
                        Password:{" "}
                    </label>
                    <input
                        {...register("password", {})}
                        placeholder="Enter your password"
                        className="border-0.5  m-1 outline-none rounded-lg p-2 px-2 bg--800 bg-richblack-700 font-semibold text-white border-richblue-200 text-[16px] shadow-md shadow-richblue-300"
                    />
                    {/* <input type="submit" /> */}
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
