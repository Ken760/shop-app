import React from 'react';
import './CardsList.css';
import Card from '../Сard/Card'


const CardsList = () => {
    return <main className="main-panel">
      <Card productName="помидора" productPrice="40р/кг" productAmount="10"/>   
      <Card productName="огурец" productPrice="55р/кг" productAmount="5"/>
      <Card productName="картошка" productPrice=" 8р/кг" productAmount="1000"/>
      <Card productName="лук" productPrice="12р/кг" productAmount="1"/>   
    </main>

}

export default CardsList;