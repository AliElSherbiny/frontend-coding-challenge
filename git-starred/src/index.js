import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'

  axios.defaults.baseURL = 'https://api.github.com/search';

  axios.interceptors.response.use(
  response => { console.log(' response received successfully ');return response; }, 
  error => { console.log(error); return Promise.reject(error); }
  );

  axios.interceptors.request.use(
    response => { console.log(' request sent successfully ');return response; }, 
    error => { console.log(error); return Promise.reject(error); }
    );

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

