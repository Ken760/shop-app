import React from 'react';
import './Button.css';

const Button = (props) => {
    const { children, onClick } = props;
    return <button className="simple-button"
        onClick={onClick}
    >{children}</button>
};

export default Button;