import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Quote from '../pages/Quote';

describe('Test Quote component', () => {
  it('should renders Quote component', () => {
    const QuoteComponent = TestRenderer.create(<Router><Quote /></Router>).toJSON();
    expect(QuoteComponent).toMatchSnapshot();
  });
});
