import React from 'react';
import Product from './pages/Product';
import './App.css';
import Drawer from './components/Drawer';
function App() {
  return (
    <div className='App'>
      <Drawer />
      <Product />
    </div>
  );
}

export default App;
