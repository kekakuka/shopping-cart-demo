import React from 'react';
import Product from './pages/Product';

import Drawer from './components/Drawer';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Drawer />
      <Product />
    </Provider>
  );
}

export default App;
