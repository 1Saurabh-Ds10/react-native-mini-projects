import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../Home/Home';

Enzyme.configure({ adapter: new Adapter() });

describe('Home', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Home />);
    expect(tree).toMatchSnapshot();
  });

  it('has proper navigation options', () => {
    expect(Home.navigationOptions).toMatchSnapshot();
  });

  it('navigate on press', () => {
    const navigate = jest.fn();
    const homeScreen = shallow(<Home navigation={{ navigate }} />);
    homeScreen.find('Button').simulate('press');
    expect(navigate).toBeCalledWith('chat', { name: 'John' });
  });
});
