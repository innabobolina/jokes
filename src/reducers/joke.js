const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_JOKES':
            return state;


        default:
            return state;
    }
}