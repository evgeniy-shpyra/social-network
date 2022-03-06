import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './Redux/reduxStore'
import { Provider } from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App store={store} />
            </Provider>
        </BrowserRouter>
    </React.StrictMode >,
    document.getElementById('root')
);

reportWebVitals();


