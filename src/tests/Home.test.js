import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/Navbar';

describe('Test Home page', () => {
  it('should renders Home page', () => {
    const HomeComponent = TestRenderer.create(<Router><Home /></Router>).toJSON();
    expect(HomeComponent).toMatchSnapshot();
  });
});
