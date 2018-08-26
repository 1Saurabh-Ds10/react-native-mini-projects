import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import SignUp from '../screens/SignUp/SignUp';

export const routes = {
  login: { screen: Login },
  signup: { screen: SignUp },
  home: { screen: Home }
};

export const noAuthRoutes = {
  login: { screen: Login },
  signup: { screen: SignUp }
};

export const authRoutes = {
  home: { screen: Home }
};


