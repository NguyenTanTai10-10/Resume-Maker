import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';




////////////////////////////////////////////////////////////
import LoginContainer from './src/container/LoginContainer/LoginContainer';

import HomeContainer from './src/container/HomeContainer/HomeContainer';






////////////////////////////////////////////////////////////

import  DrawerContainer  from './src/container/DrawerContainer/DrawerContainer';


















//Drawer navigation
const Drawer = createDrawerNavigator();
const Drawers = () => {
   return (
      <Drawer.Navigator drawerContent={(props) => <DrawerContainer {...props} />}>
         

         
      </Drawer.Navigator>
   );
};
//stack navigation
const Stack = createStackNavigator();
const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator
            screenOptions={{
               headerShown: false,
               ...TransitionPresets.SlideFromRightIOS,
            }}>
            
            <Stack.Screen name="Login" component={LoginContainer} />
            <Stack.Screen name="HomeContainer" component={HomeContainer} />
            <Stack.Screen name="Drawers" component={Drawers} />
            
            
     
            
            
         </Stack.Navigator>
      </NavigationContainer>
   );
};
export default App;
