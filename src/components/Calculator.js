import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class CalculatorUI extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <div className="box-type-1 box-1">0</div>
        <div className="box-type-2 box-2">AC</div>
        <div className="box-type-2 box-3">+/-</div>
        <div className="box-type-2 box-4">%</div>
        <div className="box-type-2 orange-box box-5">÷</div>

        <div className="box-type-2 box-6">7</div>
        <div className="box-type-2 box-7">8</div>
        <div className="box-type-2 box-8">9</div>
        <div className="box-type-2 orange-box box-9">x</div>

        <div className="box-type-2 box-10">4</div>
        <div className="box-type-2 box-11">5</div>
        <div className="box-type-2 box-12">6</div>
        <div className="box-type-2 orange-box box-13">-</div>

        <div className="box-type-2 box-14">1</div>
        <div className="box-type-2 box-15">2</div>
        <div className="box-type-2 box-16">3</div>
        <div className="box-type-2 orange-box box-17">+</div>

        <div className="box-type-3 box-18">0</div>
        <div className="box-type-2 box-19">.</div>
        <div className="box-type-2 orange-box box-20">=</div>
      </div>
    );
  }
}
