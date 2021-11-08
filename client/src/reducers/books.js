const books = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_BOOKS':
            return action.payload;
        case 'ADD_BOOK':
            return [...state, action.payload];
        case 'EDIT_BOOK':
            return state.map((book) => book._id === action.payload._id ? action.payload : book);
        case 'DELETE_BOOK':
            return state.filter((book) => book._id !== action.payload);
        default:
            return state;
    }
}

export default books;