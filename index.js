/** @format */

import './src/projects/InstagramClone/config/ReactronConfig';

import {AppRegistry, YellowBox} from 'react-native';
 // import App from './src/projects/WhatsAppClone/App';
// import App from './src/projects/animation/App';
 import App from './src/projects/InstagramClone/App';

import {name as appName} from './app.json';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
console.ignoredYellowBox = ['Remote debugger'];



AppRegistry.registerComponent(appName, () => App);
