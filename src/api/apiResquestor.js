import ApiRequestType from "./apiRequestorType";

class ApiGetRequestor {
    constructor(client) {
        this.client = client;
    }
    makeRequest = async (url) => {
        let response = await this.client.get(url);
        return response.data;
    };
}

class ApiPostRequestor {
    constructor(client) {
        this.client = client;
    }
    makeRequest = async (url, reqData) => {
        let response = await this.client.post(url, reqData);
        return response.data;
    };
}

class ApiPutRequest {
    constructor(client) {
        this.client = client;
    }
    makeRequest = async (url, reqData) => {
        let response = await this.client.put(url, reqData);
        return response.data;
    };
}

class ApiPatchRequest {
    constructor(client) {
        this.client = client;
    }
    makeRequest = async (url, reqData) => {
        let response = await this.client.patch(url, reqData);
        return response.data;
    };
}

class ApiRequestor {
    constructor(client) {
        this.getRequestor = new ApiGetRequestor(client);
        this.postRequestor = new ApiPostRequestor(client);
        this.putRequestor = new ApiPutRequest(client);
        this.patchRequestor = new ApiPatchRequest(client);
    }
    makeRequest = async (type, url, reqData) => {
        switch (type) {
            case ApiRequestType.GET:
                return await this.getRequestor.makeRequest(url);
            case ApiRequestType.POST:
                return await this.postRequestor.makeRequest(url, reqData);
            case ApiRequestType.patch:
                return await this.patchRequestor(url, reqData);
            case ApiRequestType.PUT:
                return this.putRequestor(url, reqData);
            default:
                throw Error("Invalid ApiRequestType");
        }
    };
}

export default ApiRequestor;
