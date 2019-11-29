import React from 'react';
import './App.css';
import Card from './components/side/Сard/Card'


function App() {
  return (
    <div className="App">
      <Card productName="помидора" productAmount="10"/>
      <Card productName="огурец" productAmount="5"/>
      <Card productName="картошка" productAmount="1000"/>
      <Card productName="лук" productAmount="1"/>
    </div>
  );
}

export default App;
