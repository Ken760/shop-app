import React from 'react';
import './Card.css';
import Button from '../../base/Button/Button';


const Card = (props) => {
    return <section className="product-card">
        <div>
            <div>
                <Button text="+"></Button>
                <Button text="-"></Button>
            </div>
        </div>
    </section>
}

export default Card;