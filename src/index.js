import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let persons = [
  {id: 1, name: "Artur"},
  {id: 2, name: "Evgeniy"}
];
let dialogs = [
  {id: 1, message: "Hello", time: "09:12"},
  {id: 2, message: "Hi", time: "21:12"}
];

let posts = [
  {id: 1, name: "Evgeniy", text: "culpa, accusamus blanditiis, soluta obcaecati ab! Eaque voluptate id ullam?"},
  {id: 2, name: "Vasa", text: "culpa, accusamus blanditiis, soluta obcaecati e voluptate id ullam?"},
  {id: 3, name: "Dima", text: " soluta obcaecati ab! Eaque voluptate id ullam?"}
];





ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App dialogs={dialogs} persons={persons} posts={posts}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
