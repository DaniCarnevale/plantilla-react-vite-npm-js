import React from 'react';
import './button.css';

const Button = ({ text, size = 'medium', bgColor = '#007BFF', textColor = 'white' }) => {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <button className={`btn btn-${size}`} style={buttonStyle}>
      {text}
    </button>
  );
}

export default Button;


/* Asi se llama El componente con sus respectivas props 
  <Button text="Botón Rojo" size="small" bgColor="#e74c3c" textColor="white" />
  <Button text="Botón Azul" size="medium" />
  <Button text="Botón Verde" size="large" bgColor="#2ecc71" textColor="#333" />
*/