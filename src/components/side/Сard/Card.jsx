import React from 'react';
import './Card.css';
import Button from '../../base/Button/Button';

/**
 * Компонент карточки. 
 */
const Card = (props) => {
    const { productName, productAmount } = props;
    return <section className="product-card">
        <div>
            <div className="top-panel">
                <span>{productName}</span>
            </div>
            <div className="middle-container">
                <span>{productAmount}</span>
            </div>
            <div className="controller-container">
                <Button text="-"></Button>
                <Button text="+1"></Button>
            </div>
        </div>
    </section>
}

export default Card;