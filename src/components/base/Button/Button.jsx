import React from 'react';
import './Button.css';

const Button = (props) => {
    const { text, onClick } = props;
    return <button className="simple-button"
        onClick={onClick}
    >{text}</button>
};

export default Button;