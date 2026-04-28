import React from "react";

const Button = ({ label, onClick, className, style }) => {
  return (
    <button className={className} onClick={onClick} style={style}>
      {label}
    </button>
  );
};

export default Button;
