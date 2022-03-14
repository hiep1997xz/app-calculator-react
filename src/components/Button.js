import React from "react";
import '../css/Button.css';

const Button = ({ onClick, className, value }) => {
  return (
    <div className={className} onClick={onClick}>
      {value}
    </div>
  );
};

export default Button;
