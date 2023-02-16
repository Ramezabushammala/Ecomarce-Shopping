import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import { store } from './app/store';

import { ChakraProvider } from '@chakra-ui/react'

import {extendedCategoryApi} from './features/categories/categoryApi'
import { extendedProductApi } from './features/products/productApi';

//fetch (categories)
store.dispatch(extendedCategoryApi.endpoints.getCategories.initiate())
store.dispatch(extendedProductApi.endpoints.getAllProducts.initiate())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
