import React, { useState } from 'react';

import './Input.scss';

import validIcon from '../../assets/icons/succes.svg';
import invalidIcon from '../../assets/icons/error.svg';

const Input = ({
  label,
  mode = 'long',
  onChange,
  value,
  hint,
  placeholder,
}) => {
  return (
    <div className='input'>
      <label className={`input__label ${true && 'input__label--error'}`}>
        {label}
      </label>
      <div className='input__wrapper'>
        <div
          className={`input__inner ${
            false ? 'input__inner--success' : 'input__inner--error'
          } ${mode === 'short' ? 'short' : 'long'}`}
        >
          <input
            className='input__inner--input'
            type='text'
            value={value}
            onChange={onChange}
            // onBlur={handleValidation}
            placeholder={placeholder}
          />
          {true && <img className='input__inner--success' src={validIcon} />}
        </div>
        {true && <img className='input__error' src={invalidIcon} />}
      </div>
      <p className='input__hint'>{hint}</p>
    </div>
  );
};

export default Input;
