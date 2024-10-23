import { useEffect, useState } from "react";
import userServices from "../api/services/user";

const Test = () => {
    const [userList, setUserList] = useState([]);

    const { usersData } = userServices();

    useEffect(() => {
        fetchUsersList();
    }, []);

    const fetchUsersList = async () => {
        try {
            const { result, data, msg } = await usersData();
            if (data) {
                setUserList(data);
            }
        } catch (error) {
            console.log("error");
        }
    };

    console.log("usersList", userList);

    if (userList.length === 0) {
        return <>error</>;
    }

    console.log("usersList", userList);

    return (
        <>
            <div className="text-[30px] font-bold text-center bg-green-100">
                hy this is test page{" "}
            </div>
            {userList.map((data) => {
                return (
                    <>
                        <p> {data.name} </p> <p> {data.mobileNo} </p>{" "}
                        <p> {data.email} </p> <p> {data.password} </p>{" "}
                    </>
                );
            })}
            <div>
                <p> {userList.name} </p>{" "}
            </div>{" "}
        </>
    );
};

export default Test;
