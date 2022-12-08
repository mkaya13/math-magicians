import React from 'react';
import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CalculatorUI from '../components/Calculator';

describe('Calculator', () => {
  it('contains exactly 19 items', () => {
    render(<Router><CalculatorUI /></Router>);

    const btn = screen.getAllByRole('button');

    expect(btn.length).toBe(19);
  });

  it('returns 5 when button 5 is clicked', () => {
    render(<Router><CalculatorUI /></Router>);
    const resultElement = screen.getByTestId('calculator-items');
    const btnFive = screen.getByTestId('5');

    fireEvent.click(btnFive);

    expect(resultElement).toHaveTextContent(5);
  });

  it('returns result after a {6, +, 4, =} operation', () => {
    render(<Router><CalculatorUI /></Router>);
    const resultElement = screen.getByTestId('calculator-items');
    const btnSix = screen.getByTestId('6');
    const btnFour = screen.getByTestId('4');
    const btnPlus = screen.getByTestId('+');
    const btnEqual = screen.getByTestId('=');

    fireEvent.click(btnSix);
    fireEvent.click(btnPlus);
    fireEvent.click(btnFour);
    fireEvent.click(btnEqual);

    expect(resultElement).toHaveTextContent(10);
  });
});
