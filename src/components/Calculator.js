import React from 'react';
import calculate from '../logic/calculate';

export default class CalculatorUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler = async (event) => {
    const inputTag = document.querySelector('.box-type-1');
    const currentSign = await event.target.innerText;
    const numberString = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const { total, next } = this.state;
    if (numberString.includes(currentSign)) {
      await this.setState({ next: ((next) + (event.target.innerText)) });
      if (total === '') {
        inputTag.value = next + event.target.innerText;
      } else {
        const { total, next, operation } = this.state;
        inputTag.value = total.concat(operation, next);
      }
    } else if (currentSign === '=') {
      await this.setState((prevState) => ({ total: calculate(prevState, currentSign).total, next: '', operation: '' }));
      const { total } = this.state;
      inputTag.value = total;
    } else if (currentSign === 'AC') {
      await this.setState({ total: '', next: '', operation: '' });
      inputTag.value = '';
    } else if (currentSign === '+/-') {
      const { next, total } = this.state;
      if (next !== '') {
        if ((next[0] === '-')) {
          await this.setState({ next: next.substring(1) });
          const outcome = next;
          inputTag.value = outcome;
        } else {
          await this.setState({ next: '-'.concat(next) });
          const outcome = '-'.concat(next);
          inputTag.value = outcome;
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if ((next === '') && (total[0] === '-')) {
          const { total } = this.state;
          await this.setState({ total: total.substring(1) });
          const outcome = total;
          inputTag.value = outcome;
        } else {
          const { total } = this.state;
          await this.setState({ total: '-'.concat(total) });
          const outcome = '-'.concat(total);
          inputTag.value = outcome;
        }
      }
    } else if (currentSign === '.') {
      const { total } = this.state;
      if (!total.includes('.')) {
        await this.setState((prevState) => ({ ...calculate(prevState, currentSign) }));
        const { next } = this.state;
        inputTag.value = next;
      }
    } else {
      const { total } = this.state;
      if (total !== '') {
        const tempOutcome = total;
        await this.setState({ total: tempOutcome, operation: event.target.innerText });
        const { next, operation } = this.state;
        const outcome = total;
        inputTag.value = outcome.concat(operation, next);
      } else {
        await this.setState({ total: next, next: '', operation: event.target.innerText });
        const { total } = this.state;
        inputTag.value = total.concat(event.target.innerText);
      }
    }
  }

  render() {
    return (
      <div className="flex-container">
        <input className="box-type-1" type="text" placeholder="0" />

        <button type="button" onClick={this.buttonHandler} className="box-type-2 box-2">AC</button>
        <button type="button" onClick={this.buttonHandler} className="box-type-2 box-3">+/-</button>
        <button type="button" onClick={this.buttonHandler} className="box-type-2 box-4">%</button>
        <button type="button" onClick={this.buttonHandler} className="box-type-2 orange-box box-5">÷</button>

        <button type="button" onClick={this.buttonHandler} className="box-type-2 box-6">7</button>
        <button type="button" onClick={this.buttonHandler} className="box-type-2 box-7">8</button>
        <button type="button" onClick={this.buttonHandler} className="box-type-2 box-8">9</button>
        <button type="button" onClick={this.buttonHandler} className="box-type-2 orange-box box-9">x</button>

        <button type="button" onClick={this.buttonHandler} className="box-type-2 box-10">4</button>
        <button type="button" onClick={this.buttonHandler} className="box-type-2 box-11">5</button>
        <button type="button" onClick={this.buttonHandler} className="box-type-2 box-12">6</button>
        <button type="button" onClick={this.buttonHandler} className="box-type-2 orange-box box-13">-</button>

        <button type="button" onClick={this.buttonHandler} className="box-type-2 box-14">1</button>
        <button type="button" onClick={this.buttonHandler} className="box-type-2 box-15">2</button>
        <button type="button" onClick={this.buttonHandler} className="box-type-2 box-16">3</button>
        <button type="button" onClick={this.buttonHandler} className="box-type-2 orange-box box-17">+</button>

        <button type="button" onClick={this.buttonHandler} className="box-type-3 box-18">0</button>
        <button type="button" onClick={this.buttonHandler} className="box-type-2 box-19">.</button>
        <button type="button" onClick={this.buttonHandler} className="box-type-2 orange-box box-20">=</button>
      </div>
    );
  }
}
