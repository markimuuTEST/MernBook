import React from 'react';
import TextField from '../TextField';
import TextArea from '../TextArea';
import TextList from '../TextList';
import AddButton from '../AddButton';
import EditButton from '../EditButton';
import DeleteButton from '../DeleteButton';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, editBook, deleteBook } from '../../actions/books';

import '../../App.css';

const BookForm = () => {
  const [bookData, setBookData] = React.useState({
    Title: '', Author: '', Description: ''
  })
  const [currentId, setCurrentId] = React.useState(null);

  const dispatch = useDispatch();
  const book = useSelector((state) => currentId ? state.books.find((b) => b._id === currentId) : null);

  React.useEffect(() => {
    if(book) setBookData(book);
  }, [book]);

  const handleAdd = (e) => {
      e.preventDefault();

      if (bookData.Title === "" || bookData.Author === "" || bookData.Description === "") {
        return false
      } else {
        dispatch(addBook(bookData));
        clear();
      }
  }

  const handleEdit = (e) => {
    e.preventDefault();

    dispatch(editBook(currentId, bookData));
    clear();
  }

  const handleRemove = (e) => {
    e.preventDefault();

    dispatch(deleteBook(currentId));
    clear();
  }

  const clear = () => {
    setCurrentId(null);
    setBookData({Title: '', Author: '', Description: ''});
  }

  return (
    <React.Fragment>
      <form autoComplete="off">
        <div className="Grid">
          <TextField field={"Title"} data={bookData} setValue={setBookData} />
          <TextField field={"Author"} data={bookData} setValue={setBookData} />
          <TextArea field={"Description"} data={bookData} setValue={setBookData} />
          <div className="Buttons">
            <AddButton onClick={handleAdd} currentId={currentId} />
            <EditButton onClick={handleEdit} currentId={currentId} />
            <DeleteButton onClick={handleRemove} currentId={currentId} />
          </div>
        </div>

        <div className="Grid TextlistPosition">
          <TextList currentId={currentId} setCurrentId={setCurrentId} />
        </div>

      </form>
    </React.Fragment>
  );
}

export default BookForm;