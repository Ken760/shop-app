import React from 'react';
import './App.css';
import Card from './components/side/Сard/Card'


function App() {
  return (
    <div className="App">
      <Card productName="помидора" productPrice="40р/кг" productAmount="10"/>
      <Card productName="огурец" productPrice="55р/кг" productAmount="5"/>
      <Card productName="картошка" productPrice=" 8р/кг" productAmount="1000"/>
      <Card productName="лук" productPrice="12р/кг" productAmount="1"/>
    </div>
  );
}

export default App;
