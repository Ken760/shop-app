import React from 'react';
import './ProductsCart.css';
import Button from '../../base/Button/Button'


const ProductsCart = (props) => {
    const { productName, productAmount } = props;
    return <section className="ProductsCart-contaner">
        {/* <span className="contoller-amount">0</span> */}
        <div className="button-container">
            <Button><span>-</span></Button>
            <div>
                <span className="amount">{productAmount}</span>
            </div>
            <Button><span>+</span></Button>
            <span>{productName}</span>
        </div>

    </section>
}

export default ProductsCart;
