import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'

/*Adding base url via axios that will be appened in any axios calls*/
  axios.defaults.baseURL = 'https://api.github.com/search';

/*Handling the response errors and show when response is received without errors*/
  axios.interceptors.response.use(
  response => { console.log(' response received successfully ');return response; }, 
  error => { console.log(error); return Promise.reject(error); }
  );

/*Handling the request errors and show when request is sent without errors*/
  axios.interceptors.request.use(
    response => { console.log(' request sent successfully ');return response; }, 
    error => { console.log(error); return Promise.reject(error); }
    );

/*Rendering the App component that shall be the parent component of all others*/
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

