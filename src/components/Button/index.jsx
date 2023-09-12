import React from "react";
import "./button.css";

const Button = ({text, maxWidth, pricing}) => {
  return (
    <a className="linkButton" href="#getApp">
      <button className={`button ${maxWidth ? 'button--maxWidth' : ''} ${pricing ? 'button--pricing' : ''}`}>{text}</button>
    </a>
  );
};

export default Button;
