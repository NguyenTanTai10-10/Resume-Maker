import {AppRegistry} from 'react-native';
import App from './src/index';
import {name as appName} from './app.json';
import i18n from './src/Language/LanguageContext';
import messaging from '@react-native-firebase/messaging';
// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
  

AppRegistry.registerComponent(appName, () => App);
console.disableYellowBox=true
