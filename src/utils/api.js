import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyAK4wgL8dtdAM1MzS2jbeS8Jv7sFtLCvOY",
    cx: "641c96458cb0a4ce8",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
