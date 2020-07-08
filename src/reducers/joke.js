const initialState = [
    // { id: 1, joke: "hahah" },
    // { id: 2, joke: "ha" },
];

export default (state = initialState, action) => {
    const {
        payload
    } = action;
    switch (action.type) {
        case "GET_JOKES":
            return [...state, ...payload];

        case "ADD_ONE_JOKE":
            console.log("action", action);
            const newState = [...state, action.payload];
            return newState;

        case "ADD_JOKES":
            // old state, payload (jokelist from api)
            return [...state, ...payload];

        case "INCREASE_VOTE":
            let oldState = [...state];
            // oldState.find((x) => x.id === payload);
            let secondState = oldState.map((x) => {
                if (x.id === payload.id) {
                    x.score = x.score + payload.getRandomNumberFrom1To5;
                }
                return x;
            });
            return secondState;

        case "DECREASE_VOTE":
            return [...state].map((x) => {
                if (x.id === payload.id) {
                    x.score = x.score - payload.getRandomNumberFrom1To5;
                }
                return x;
            });
        case "HANDLE_SEARCH":
            console.log("payload-new state", payload);
            console.log("old state", state);
            return payload.searchResults;

        default:
            return state;
    }
};