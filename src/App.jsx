import React from 'react';
import './App.css';
import CardsList from './components/side/CardsList/CardsList';
import TopPanel from './components/side/TopPanel/TopPanel';


function App() {
  return (
    <div className="App">
      <TopPanel/>
      <CardsList/>
    </div>
  );
}

export default App;
