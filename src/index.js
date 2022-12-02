import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CalculatorUI from './components/Calculator';
import reportWebVitals from './reportWebVitals';
import Example from './components/denemeComp';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <CalculatorUI />
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Example />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
