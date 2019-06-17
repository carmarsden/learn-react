import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
// import App from './playingwithdanger/App';
import AppLang from './lang-context/AppLang';
import './index.css';


ReactDOM.render(
    <BrowserRouter>
        <AppLang />
    </BrowserRouter>,
    document.getElementById('root')
);
