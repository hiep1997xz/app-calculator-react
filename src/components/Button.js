import React from "react";
import '../css/Button.css';

const Button = ({ onClick, className, value }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
