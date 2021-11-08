import React from 'react';
import '../App.css';

const AddButton = ({ onClick, currentId }) => {

  return (
    <div className="ButtonMargin">
       <button type="submit" onClick={onClick} disabled={currentId}>Save New</button>
    </div>
  );
}

export default AddButton;
