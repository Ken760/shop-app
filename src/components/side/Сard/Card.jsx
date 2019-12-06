import React, { useState } from 'react';
import './Card.css';
import Button from '../../base/Button/Button';

/**
 * Компонент карточки. 
 */
const Card = (props) => {
    const { productName, productPrice } = props;
    const [count, setCount] = useState(0);
    function example() {
        setCount(count + 1)
    }


    return <section className="product-card">
        <div className="top-panel">
            <span>{productName}</span>
        </div>
        <div className="middle-container">
            <span>{productPrice}</span>
        </div>
        <div className="controller-container">
            <Button
                onClick={() => setCount(count - 1)}
                text="-"
            >
            </Button>
            <span className="contoller-amount">{count}</span>
            <Button
                onClick={(example)}
                text="+"
            >
            </Button>
        </div>
    </section>
}

export default Card;