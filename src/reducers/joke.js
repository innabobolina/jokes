const initialState = [
    { id: 1, joke: "hahah" },
    { id: 2, joke: "ha" },
];

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_JOKES":
            const { payload } = action;

            return [...state, ...payload];

        case "ADD_ONE_JOKE":
            console.log("action", action);
            const newState = [...state, action.payload];
            return newState;

        default:
            return state;
    }
};