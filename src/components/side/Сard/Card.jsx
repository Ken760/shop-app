import React from 'react';
import './Card.css';
import Button from '../../base/Button/Button';

/**
 * Компонент карточки. 
 */
const Card = (props) => {
    const { productName, productAmount, productPrice } = props;
    return <section className="product-card">
            <div className="top-panel">
                <span>{productName}</span>
            </div>
            <div className="middle-container">
                <span>{productPrice}</span>
            </div>
            <div className="controller-container">
                <Button text="-"></Button>
                <span className="contoller-amount">{productAmount}</span>
                <Button text="+"></Button>
            </div>
    </section>
}

export default Card;