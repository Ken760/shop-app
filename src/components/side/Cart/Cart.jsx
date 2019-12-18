import React from 'react';
import './Cart.css';
import ProductsBasket from '../ProductsCart/ProductsCart'

const Cart = () => {
    return <section className="Cart-panel">
        <div className="Cart-container">
            <header className="header-Cart">Cart</header>
            <div className="ProductsCart-middle">
        <span class="total-items">Items in your Bag</span>
        <span  className="summary-subtotal">Items</span>
        <ProductsBasket productName="Tomato" productAmount="1"/> 
        <ProductsBasket productName="Tomato" productAmount="1"/> 
        <ProductsBasket productName="Tomato" productAmount="1"/> 
        <ProductsBasket productName="Tomato" productAmount="1"/> 
        
        <span className="summary-total">Total</span>
          <button className="checkout-cta">Go to Secure Checkout</button>
      </div>
        </div>
    </section>
}

export default Cart;
