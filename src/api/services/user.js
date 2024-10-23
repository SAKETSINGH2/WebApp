import ApiRequestType from "../apiRequestorType";
import ApiRequestor from "../apiResquestor";
import axios from "../axios"


const BASE_URL = process.env.REACT_APP_BACKEND_API_BASE_URL;

const userServices = () => {
    const requestor = new ApiRequestor(axios);

    const usersData = async() => {
        const url = `${BASE_URL}/user`;
        const apiResponse = await requestor.makeRequest(ApiRequestType.GET, url);
        return apiResponse;

    }

    const signupUser = async(reqData) => {
        const url = `${BASE_URL}/user`;
        const apiResponse = await requestor.makeRequest(ApiRequestType.POST, url, reqData);
        console.log("apiResponse", apiResponse)
        return apiResponse;
    }

    return {
        usersData,
        signupUser
    }
}

export default userServices;