import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './components/context/CartContextProvider';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDCKcTwAgCpgBHN7-8dUxwurno0ZDJ03EA",
  authDomain: "garden-trellini-r.firebaseapp.com",
  projectId: "garden-trellini-r",
  storageBucket: "garden-trellini-r.appspot.com",
  messagingSenderId: "562961172295",
  appId: "1:562961172295:web:5c94e0fb44700111deae62"
};

initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>

      <BrowserRouter>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);
