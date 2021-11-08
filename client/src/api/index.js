import axios from 'axios';

const url = 'http://localhost:3001/books';

export const fetchBooks = () => axios.get(url);
export const addBook = (newBook) => axios.post(url, newBook);
export const editBook = (id, editedBook) => axios.patch(`${url}/${id}`, editedBook);
export const deleteBook = (id) => axios.delete(`${url}/${id}`, id);