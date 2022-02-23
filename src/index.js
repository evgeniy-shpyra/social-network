import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './Redux/reduxStore'
import StoreContext from './StoreContext';



let reRenderEntireTree = (store) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App store={store} />
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode >,
        document.getElementById('root')
    );
    reportWebVitals();
}

reRenderEntireTree(store)

store.subscribe(() => {
    reRenderEntireTree(store)
})