import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/* This code is rendering the `App` component inside the root element of the HTML document using React.
It is using `ReactDOM.createRoot` to create a new root for the React tree and then calling the
`render` method to render the `App` component inside the root element. The `React.StrictMode`
component is used to enable strict mode which helps to identify potential problems in the code. */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
