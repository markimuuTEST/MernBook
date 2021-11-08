import React from 'react';
import '../App.css';

const EditButton = ({ onClick, currentId }) => {

  return (
    <div className="ButtonMargin">
       <button type="submit" onClick={onClick} disabled={!currentId}>Save</button>
    </div>
  );
}

export default EditButton;