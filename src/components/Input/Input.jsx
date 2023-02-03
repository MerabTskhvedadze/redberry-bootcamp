import React, { useState } from 'react';

import './Input.scss';

import validIcon from '../../assets/icons/succes.svg';
import invalidIcon from '../../assets/icons/error.svg';

const Input = ({ label, mode = 'long', onChange, value, validRules: hint }) => {
  const [isValid, setValid] = useState(false);

  const handleValidation = (e) => {
    const inputValue = e.target.value;
    setValid(inputValue !== '');
  };

  return (
    <>
      <label className='label'>{label}</label>
      <div className='input'>
        <input
          className={`input__area ${mode === 'short' ? 'short' : 'long'}`}
          type='text'
          value={value}
          onChange={onChange}
          onBlur={handleValidation}
        />
        {true && <img className='input__icon' src={validIcon} />}
      </div>
      <p>{hint}</p>
      {true && <img className='errorIcon' src={invalidIcon} />}
    </>
  );
};

export default Input;
