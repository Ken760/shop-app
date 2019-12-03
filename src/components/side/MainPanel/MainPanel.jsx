import React from 'react';
import './MainPanel.css';
import CardList from '../CardsList/CardsList'
import Basket from '../Basket/Basket'

const MainPanel = () => {
    return <main className="main-panel">
         <Basket/>
         <CardList/>
    </main>

}

export default MainPanel;