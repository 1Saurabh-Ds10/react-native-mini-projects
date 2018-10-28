import React from 'react';
import SplashScreen from '../components/SplashScreen/SplashScreen';
import { NavigationActions, StackActions } from 'react-navigation';

class AuthService {
  _isAuthenticated = false;

  set isAuthenticated(bool) {
    this._isAuthenticated = bool;
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  checkAuth() {
    return new Promise(resolve => setTimeout(() => resolve(this.isAuthenticated), 1000));
  }
}

const authService = new AuthService(false);

export const authDecorator = Component => {
  return class AuthChecker extends React.Component {
    state = {
      auth: false
    };

    componentDidMount() {
      authService.checkAuth().then(isAuthenticated => {
        if (isAuthenticated) {
          this.setState({ auth: true });
        } else {
          this.props.navigation.dispatch(
            StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: 'main' })]
            })
          );
        }
      });
    }

    render() {
      return this.state.auth ? <Component /> : <SplashScreen />;
    }
  };
};

export default authService;
