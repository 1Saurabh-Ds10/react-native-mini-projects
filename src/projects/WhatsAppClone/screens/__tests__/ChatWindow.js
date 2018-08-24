import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ChatWindow from '../ChatWindow/ChatWindow';
import { getMockDataSpy } from '../../sevices/api';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('../../sevices/api');

Enzyme.configure({ adapter: new Adapter() });

describe('ChatWindow', () => {
  it('Chat Screen renders correctly', () => {
    const tree = renderer.create(<ChatWindow />);
    expect(tree).toMatchSnapshot();
  });

  it('ChatWindow has proper navigation options', () => {
    expect(
      ChatWindow.navigationOptions({
        navigation: {
          state: {
            params: {
              name: 'John'
            }
          }
        }
      })
    ).toMatchSnapshot();
  });

  it('goBack on press', () => {
    const goBack = jest.fn();
    const ChatWindow = shallow(<ChatWindow navigation={{ goBack }} />);
    ChatWindow.find('Button').simulate('press');
    expect(goBack).toBeCalledWith();
  });

  it('fetches data when component is rendered', () => {
    const ChatWindow = renderer.create(<ChatWindow />);
    expect(getMockDataSpy).toBeCalled();
  });
});
