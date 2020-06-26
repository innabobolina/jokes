const initialState = [
    { id: 1, joke: 'hahah' },
    { id: 2, joke: 'ha' }
]

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_JOKES':
            return state;


        default:
            return state;
    }
}