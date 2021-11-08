import * as api from '../api';

export const getBooks = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBooks();
        dispatch({ type: 'FETCH_ALL_BOOKS', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const addBook = (book) => async (dispatch) => {
    try {
        const { data } = await api.addBook(book);
        dispatch({ type: 'ADD_BOOK', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const editBook = (id, book) => async (dispatch) => {
    try {
        const { data } = await api.editBook(id, book);
        dispatch({ type: 'EDIT_BOOK', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBook = (id) => async (dispatch) => {
    try {
        await api.deleteBook(id);
        dispatch({ type: 'DELETE_BOOK'})
    } catch (error) {
        console.log(error.message);
    }
}