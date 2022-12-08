import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import calculate from '../logic/calculate';
import Navbar from './Navbar';
import Home from '../pages/Home';
import Quote from '../pages/Quote';

const CalculatorUI = () => {
  const [calcData, setcalcData] = useState({ total: 0, operation: null, next: null });
  const { total, operation, next } = calcData;
  const buttonHandler = (e) => {
    setcalcData((calcData) => calculate(calcData, e.target.textContent));
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Navbar />
              <Home />
            </>
        )}
        />
        <Route
          path="/calculator"
          element={(
            <>
              <Navbar />
              <div className="flex-container">
                <div className="box-type-1 box-1">
                  {total}
                  {operation}
                  {next}
                </div>
                <button type="button" onClick={buttonHandler} className="box-type-2 box-2">AC</button>
                <button type="button" onClick={buttonHandler} className="box-type-2 box-3">+/-</button>
                <button type="button" onClick={buttonHandler} className="box-type-2 box-4">%</button>
                <button type="button" onClick={buttonHandler} className="box-type-2 orange-box box-5">÷</button>
                <button type="button" onClick={buttonHandler} className="box-type-2 box-6">7</button>
                <button type="button" onClick={buttonHandler} className="box-type-2 box-7">8</button>
                <button type="button" onClick={buttonHandler} className="box-type-2 box-8">9</button>
                <button type="button" onClick={buttonHandler} className="box-type-2 orange-box box-9">x</button>
                <button type="button" onClick={buttonHandler} className="box-type-2 box-10">4</button>
                <button type="button" onClick={buttonHandler} className="box-type-2 box-11">5</button>
                <button type="button" onClick={buttonHandler} className="box-type-2 box-12">6</button>
                <button type="button" onClick={buttonHandler} className="box-type-2 orange-box box-13">-</button>
                <button type="button" onClick={buttonHandler} className="box-type-2 box-14">1</button>
                <button type="button" onClick={buttonHandler} className="box-type-2 box-15">2</button>
                <button type="button" onClick={buttonHandler} className="box-type-2 box-16">3</button>
                <button type="button" onClick={buttonHandler} className="box-type-2 orange-box box-17">+</button>
                <button type="button" onClick={buttonHandler} className="box-type-3 box-18">0</button>
                <button type="button" onClick={buttonHandler} className="box-type-2 box-19">.</button>
                <button type="button" onClick={buttonHandler} className="box-type-2 orange-box box-20">=</button>
              </div>
            </>
          )}
        />
        <Route
          path="/quote"
          element={(
            <>
              <Navbar />
              <Quote />
            </>
        )}
        />
      </Routes>
    </div>
  );
};

export default CalculatorUI;
