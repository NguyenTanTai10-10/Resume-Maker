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

import SkillsComponent from './src/component/SkillsComponent';
import ResumeTitleContainer from './src/container/ResumeTitleContainer/ResumeTitleContainer';
import ContactContainer from './src/container/ContactContainer/ContactContainer';
import ContactHomeContainer from './src/container/ContactHomeContainer/ContactHomeContainer';
import ResumeHomeContainer from './src/container/ResumeHomeContainer/ResumeHomeContainer';
import BasicsInfoContainer from './src/container/BasicsInfoContainer/BasicsInfoContainer';
import ListEducationContainer from './src/container/ListEducationContainer/ListEducationContainer';
import AddEducationContainer from './src/container/AddEducationContainer/AddEducationContainer';
import  EditEducationContainer  from './src/container/EditEducationContainer/EditEducationContainer';
import  ListExperienContainer  from './src/container/ListExperienContainer/ListExperienContainer';
import  AddExperiencesContainer  from './src/container/AddExperiencesContainer/AddExperiencesContainer';

import  AddLanguageContainer  from './src/container/AddLanguageContainer/AddLanguageContainer';
import  ListLanguageContainer  from './src/container/ListLanguageContainer/ListLanguageContainer';
import  EditLanguageContainer  from './src/container/EditLanguageContainer/EditLanguageContainer';
import  SkillsContainer  from './src/container/SkillsContainer/SkillsContainer';
import EditExpContainer from './src/container/EditExpContainer/EditExpContainer';
import i18n from './src/Language/LanguageContext'
import  ChangePassContainer  from './src/container/ChangePassContainer/ChangePassContainer';
import ForgetPasswordContainer from './src/container/ForgetPasswordContainer/ForgetPasswordContainer';
import ChooseCVContainer from './src/container/ChooseCVConatiner/ChooseCVContainer';
import ShowPdfContainer from './src/container/ShowPdfContainer/ShowPdfContainer';
import PDFShowContainer from './src/container/PDFShowContainer/PDFShowContainer';









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
        <Stack.Screen
          name="ListExperienContainer"
          component={ListExperienContainer}
        />
        <Stack.Screen
          name="AddExperiencesContainer"
          component={AddExperiencesContainer}
        />
        <Stack.Screen
          name="EditExpContainer"
          component={EditExpContainer}
        />
         <Stack.Screen
          name="AddLanguageContainer"
          component={AddLanguageContainer}
        />
        <Stack.Screen
          name="ListLanguageContainer"
          component={ListLanguageContainer}
        />
        <Stack.Screen
          name="EditLanguageContainer"
          component={EditLanguageContainer}
        />
        <Stack.Screen
          name="SkillsContainer"
          component={SkillsContainer}
        />
        <Stack.Screen
          name="ChangePassContainer"
          component={ChangePassContainer}
        />
        <Stack.Screen
          name="ForgetPasswordContainer"
          component={ForgetPasswordContainer}
        />
        <Stack.Screen
          name="ChooseCVContainer"
          component={ChooseCVContainer}
        />
        <Stack.Screen
          name="ShowPdfContainer"
          component={ShowPdfContainer}
        />
        <Stack.Screen
          name="PDFShowContainer"
          component={PDFShowContainer}
        />
        {/* PDFShowContainer */}
        {/* ShowPdfContainer */}
        {/* ChooseCVContainer */}
        {/* ForgetPasswordContainer */}
        {/* ShowPdfComponent */}
        {/* ChangePassContainer */}
        {/* EditLanguageContainer */}
        {/* ListLanguageContainer */}
        {/* EditSkillContainer */}
        {/* AddExperiencesContainer */}
        {/* ListExperienContainer */}
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
