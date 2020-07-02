import axios from "axios";

// actions dispatch data to reducers immediately but we need some time to get data from API
// need meddleware to handle the response
export const getJokes = () => async(dispatch) => {
    dispatch({ type: "SHOW_LOADING" });
    let count = 0;
    let arrJokes = [];
    while (count < 10) {
        const response = await axios.get("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json",
            },
        });
        const { id, joke } = response.data;
        arrJokes.push({ id, joke });
        count++;
    }
    console.log(arrJokes);

    dispatch({
        type: "GET_JOKES",
        payload: arrJokes,
    });
    dispatch({
        type: "HIDE_LOADING",
    });
};

export const addOneJoke = () => async(dispatch) => {
    const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    });
    // console.log("response", response);
    const { id, joke } = response.data;
    dispatch({
        type: "ADD_ONE_JOKE",
        payload: { id, joke },
    });
};
export const addJokes = (number) => async(dispatch) => {
    dispatch({
        type: "SHOW_LOADING",
    });

    let jokeArr = [];
    for (let i = 0; i < number; i++) {
        const response = await axios.get("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json",
            },
        });
        const { id, joke } = response.data;
        jokeArr.push({ id, joke });
    }

    // console.log("response", response);
    console.log(jokeArr);
    dispatch({
        type: "ADD_JOKES",
        payload: jokeArr,
    });

    dispatch({
        type: "HIDE_LOADING",
    });
};