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
                <Button text="-"></Button>
                <Button text="+"></Button>
            </div>
    </section>
}

export default ProductsBasket;
