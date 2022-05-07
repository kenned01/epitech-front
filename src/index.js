import { UIRouter, pushStateLocationPlugin } from '@uirouter/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { STATES } from './States'
import axios  from 'axios';
import 'antd/dist/antd.css';
import './index.css'


axios.defaults.baseURL = 'http://127.0.0.1:5000';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <UIRouter
    plugins={[pushStateLocationPlugin]}
    states={[...STATES]}
  >
    <App />
  </UIRouter>
);