import React from 'react';
import './MainPanel.css';
import CardList from '../CardsList/CardsList'
import Cart from '../Cart/Cart'

const MainPanel = () => {
    return <main className="main-panel">
         <Cart/>
         <CardList/>
    </main>

}

export default MainPanel;