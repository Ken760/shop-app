import React from 'react';
import './ProductsBasket.css';
import Button from '../../base/Button/Button'


const ProductsBasket = (props) => {
    const { productName, productAmount } = props;
    return <section className="ProductsBasket-contaner">
        <div className="ProductsBasket-middle">
            <span>{productName}: {productAmount}</span>
        </div>
            <div className="button-container">
            <span className="contoller-amount">0</span>
                <Button><span>-</span></Button>
                <Button><span>+</span></Button>
            </div>
    </section>
}

export default ProductsBasket;
