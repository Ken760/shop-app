import React from 'react';
import './Basket.css';
import ProductsBasket from '../ProductsBasket/ProductsBasket'

const Basket = () => {
    return <section className="basket-panel">
        <div className="basket-container">
            <header className="header-basket">Корзина</header>
            <ProductsBasket productName="Помидора"  productAmount="10" />
            <ProductsBasket productName="Огурец"  productAmount="5" />
            <ProductsBasket productName="Картошка"  productAmount="1000" />
            <div className="total-basket">
                <span>Итого:</span>
            </div>
        </div>
    </section>
}

export default Basket;
