import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import React from 'react';
import Product from './pages/Product';
import ReduxToastr from 'react-redux-toastr';
import Drawer from './components/Drawer';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Drawer />
      <Product />
      <ReduxToastr position='bottom-center' transitionIn='fadeIn' transitionOut='fadeOut' timeOut={500} />
    </Provider>
  );
}

export default App;
