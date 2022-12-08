import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import CalculatorUI from '../components/Calculator';

describe('Test Calculator component', () => {
  it('should renders Calculator component', () => {
    const calculatorComponent = renderer.create(<Router><CalculatorUI /></Router>).toJSON();
    expect(calculatorComponent).toMatchSnapshot();
  });
});
