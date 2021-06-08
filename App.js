import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {createDrawerNavigator} from '@react-navigation/drawer';

import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

////////////////////////////////////////////////////////////
import LoginContainer from './src/container/LoginContainer/LoginContainer';

import HomeContainer from './src/container/HomeContainer/HomeContainer';

////////////////////////////////////////////////////////////

import DrawerContainer from './src/container/DrawerContainer/DrawerContainer';
import LoginHomeContainer from './src/container/LoginHomeContainer/LoginHomeContainer';
import ListCVContainer from './src/container/ListCVContainer/ListCVContainer';
import LanguageComponent from './src/component/LanguageComponent';
import ExperiencesComponent from './src/component/ExperiencesComponent';
import SkillsComponent from './src/component/SkillsComponent';
import ResumeTitleContainer from './src/container/ResumeTitleContainer/ResumeTitleContainer';
import ContactContainer from './src/container/ContactContainer/ContactContainer';
import ContactHomeContainer from './src/container/ContactHomeContainer/ContactHomeContainer';
import ResumeHomeContainer from './src/container/ResumeHomeContainer/ResumeHomeContainer';
import BasicsInfoContainer from './src/container/BasicsInfoContainer/BasicsInfoContainer';
import ListEducationContainer from './src/container/ListEducationContainer/ListEducationContainer';
import AddEducationContainer from './src/container/AddEducationContainer/AddEducationContainer';
import  EditEducationContainer  from './src/container/EditEducationContainer/EditEducationContainer';


//Drawer navigation
const Drawer = createDrawerNavigator();
const Drawers = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContainer {...props} />}>
      <Drawer.Screen name="HomeContainer" component={HomeContainer} />
    </Drawer.Navigator>
  );
};
//stack navigation
const Stack = createStackNavigator();
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="LoginContainer" component={LoginContainer} />

        <Stack.Screen
          name="LoginHomeContainer"
          component={LoginHomeContainer}
        />
        <Stack.Screen name="Drawers" component={Drawers} />
        <Stack.Screen name="ListCVContainer" component={ListCVContainer} />
        <Stack.Screen
          name="ResumeTitleContainer"
          component={ResumeTitleContainer}
        />
        <Stack.Screen name="ContactContainer" component={ContactContainer} />
        <Stack.Screen
          name="BasicsInfoContainer"
          component={BasicsInfoContainer}
        />
        <Stack.Screen name="LanguageComponent" component={LanguageComponent} />
        <Stack.Screen
          name="ExperiencesComponent"
          component={ExperiencesComponent}
        />
        <Stack.Screen name="SkillsComponent" component={SkillsComponent} />
        <Stack.Screen
          name="ContactHomeContainer"
          component={ContactHomeContainer}
        />
        <Stack.Screen
          name="ResumeHomeContainer"
          component={ResumeHomeContainer}
        />
        <Stack.Screen
          name="AddEducationContainer"
          component={AddEducationContainer}
        />
        <Stack.Screen
          name="ListEducationContainer"
          component={ListEducationContainer}
        />
        <Stack.Screen
          name="EditEducationContainer"
          component={EditEducationContainer}
        />
        {/* EditEducationContainer */}
        {/* ListEducationContainer */}
        {/* EducationContainer */}
        {/* BasicInfoContainer */}
        {/* ResumeHomeContainer */}
        {/* ContactHomeContainer */}
        {/* SkillsComponent */}
        {/* ExperiencesComponent */}
        {/* Education */}
        {/* ResumeTitleComponent */}
        {/* ListCVContainer */}
        {/* ContactComponent */}
        {/* BasicInfoComponent */}
        {/* LanguageComponent */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
