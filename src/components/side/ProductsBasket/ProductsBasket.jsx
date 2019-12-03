import React from 'react';
import './ProductsBasket.css';
import Button from '../../base/Button/Button'


const Basket = () => {
    return <section className="basket-container">
        <header className="header-basket">Корзина</header>
        <div className="middle-basket-container">
            <span>Сыр</span>
            <Button text="-"></Button>
            <Button text="+"></Button>
        </div>
    </section>
}

export default Basket;
