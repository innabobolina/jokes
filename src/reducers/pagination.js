const initialState = {
    totalJokes: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_SEARCH':
            console.log(action.payload)
            return {
                ...state,
                totalJokes: action.payload.totalJokes
            }

        default:
            return state
    }
}