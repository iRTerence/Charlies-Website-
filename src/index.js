import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App';
import reportWebVitals from './pages/App/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './fonts/IvyJournal/IvyJournal-Regular.ttf'
import './index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


