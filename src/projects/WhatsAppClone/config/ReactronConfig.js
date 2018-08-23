import Reactotron,  { asyncStorage, networking } from 'reactotron-react-native';


if (__DEV__) {


  Reactotron
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(networking())
  .use(asyncStorage())
  .connect();

  console.tran = Reactotron;

}

