import axios from "axios";

// actions dispatch data to reducers immediately but we need some time to get data from API
// need meddleware to handle the response

const getRandomNumberFrom1To5 = () => Math.floor(Math.random() * 5) + 1;
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
        // const imageResponse = await axios.get(
        //     `https://icanhazdadjoke.com/j/${id}.png`, {
        //         headers: {
        //             Accept: "application/json",
        //         },
        //     }
        // );

        arrJokes.push({
            id,
            joke,
            score: 0,
            // image: imageResponse.data,
        });
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
        payload: { id, joke, score: 0 },
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
        jokeArr.push({ id, joke, score: 0 });
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

export const increaseVote = (id) => async(dispatch) => {
    dispatch({
        type: "INCREASE_VOTE",
        payload: { id, getRandomNumberFrom1To5: getRandomNumberFrom1To5() },
    });
};

export const decreaseVote = (id) => async(dispatch) => {
    dispatch({
        type: "DECREASE_VOTE",
        payload: { id, getRandomNumberFrom1To5: getRandomNumberFrom1To5() },
    });
};