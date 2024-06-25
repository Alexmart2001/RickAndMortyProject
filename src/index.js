import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import {Provider} from "react-redux";
import store from "./store";
import Principal from "./Principal";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Principal/>
    </Provider>
);
