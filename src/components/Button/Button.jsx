import React from 'react';
import './Button.scss';

const Button = ({ children, onClick, className }) => {
  return (
    <button className={className || 'btn'} onClick={onClick} type='button'>
      {children}
    </button>
  );
};

export default Button;
