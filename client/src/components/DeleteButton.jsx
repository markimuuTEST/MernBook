import React from 'react';
import '../App.css';

const DeleteButton = ({ onClick, currentId }) => {

  return (
    <div className="ButtonMargin">
       <button type="submit" onClick={onClick} disabled={!currentId}>Delete</button>
    </div>
  );
}

export default DeleteButton;