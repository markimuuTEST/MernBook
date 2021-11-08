import React from 'react';
import { getBooks } from '../actions/books';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';

const TextList = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  React.useEffect(() => {
    dispatch(getBooks());
  }, [currentId, dispatch]);

  return (
    <div>
        <select name="books" multiple size="6" className="Textlist">
          {books.map((book) => (
            <option key={book._id} value={book.Title} onClick={() => setCurrentId(book._id)}>{book.Title}, {book.Author}</option>
          ))}
        </select>
    </div>
  );
}

export default TextList;