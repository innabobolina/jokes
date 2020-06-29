import axios from "axios";

// actions dispatch data to reducers immediately but we need some time to get data from API
// need meddleware to handle the response
export const getJokes = () => async(dispatch) => {
    const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    });
    console.log("response", response);
    const { id, joke } = response.data;
    dispatch({
        type: "GET_JOKES",
        payload: {
            id,
            joke,
        },
    });
};