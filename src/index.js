import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalculatorUI from './components/Calculator';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Home />
              </>
          )}
          />
          <Route
            path="/calculator"
            element={(
              <>
                <CalculatorUI />
              </>
            )}
          />
          <Route
            path="/quote"
            element={(
              <>
                <Quote />
              </>
            )}
          />
        </Routes>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
