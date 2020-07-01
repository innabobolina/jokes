const initialState = { isLoading: true };

export default (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_LOADING":
            return {...state, isLoading: true };

        case "HIDE_LOADING":
            return {...state, isLoading: false };

        default:
            return state;
    }
};