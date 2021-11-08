import React from 'react';
import '../App.css';

const TextField = ({ field, data, setValue }) => {
    const value = data[field];

  return (
    <div>
        <label htmlFor={field}>{field}</label><br />
        <input type="text" 
            id={field} 
            name={field} 
            value={value} 
            required="required"
            onChange={(e) => setValue({...data, [field]: e.target.value})} 
            className="Textfield" />
        <br />
    </div>
  );
}

export default TextField;