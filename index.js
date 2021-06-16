import {AppRegistry} from 'react-native';
import App from './src/index';
import {name as appName} from './app.json';
import i18n from './src/Language/LanguageContext';

AppRegistry.registerComponent(appName, () => App);
console.disableYellowBox=true
