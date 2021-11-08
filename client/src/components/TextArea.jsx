import React from 'react';
import '../App.css';

const TextArea = ({ field, data, setValue }) => {
  const value = data[field];

  return (
    <div>
        <label htmlFor={field}>Description</label><br />
        <textarea name={field} 
            rows="4" 
            type="text" 
            required="required"
            value={value}
            onChange={(e) => setValue({...data, [field]: e.target.value})} 
            className="Textfield" 
          />

    </div>
  );
}

export default TextArea;