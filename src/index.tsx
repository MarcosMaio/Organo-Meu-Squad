import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!); //Podemos forçar o código a entender que o Id nunca será nulo, adicionando um ! ao final dessa linha. Desta maneira nós, como devs front-end, estamos garantindo que o método retornará um elemento.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
