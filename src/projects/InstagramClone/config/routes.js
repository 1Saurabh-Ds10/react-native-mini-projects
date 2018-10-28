import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import SignUp from '../screens/SignUp/SignUp';
import Main from '../screens/Main/Main';

export const routes = {
  main: {screen: Main},
  login: { screen: Login },
  signup: { screen: SignUp },
  home: { screen: Home }
 
};

export const noAuthRoutes = {
  main: {screen: Main},
  login: { screen: Login },
  signup: { screen: SignUp }
 
};

export const authRoutes = {
  home: { screen: Home }
};


