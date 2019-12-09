import React, { useState } from 'react';
import './Card.css';
import Button from '../../base/Button/Button';

/**
 * Компонент карточки. 
 */
const Card = (props) => {
    const { productName, productPrice, img } = props;
    const [count, value] = useState(0);
    // function example(value) {
    //     if (value > 0) 
    //         return;
        
    // }

    return <section className="product-card">
        <div className="top-panel">
            <span>{productName}</span>
            <img className="img" src={img} alt="" />
        </div>
        <div className="middle-container">
            <span>{productPrice}</span>
        </div>
        <div className="controller-container">
            {/* <span className="contoller-amount">{count}</span> */}
            {/* <div className="add-cart"> */}
            <button className="add-cart" 
                onClick={() => value(count + 1)}
            >
                <img className="img-cart"src="https://cdn.icon-icons.com/icons2/1055/PNG/128/17-cart-cat_icon-icons.com_76693.png" alt=""/>
            <span className="cart-text">Add to cart</span>
            </button>
            </div>
        {/* </div> */}
    </section>
}

export default Card;