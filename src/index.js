import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './App';
import GiphyProvider from "./store/Provider/GiphyProvider/GiphyProvider"
ReactDOM.render(
  <React.StrictMode>
    <GiphyProvider>
      <App />
    </GiphyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

