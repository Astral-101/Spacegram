import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import BottomTabNavigator from './BottomNavigation';


const Drawer = createDrawerNavigator();
const DrawerNavigator =()=>{
    return(
     <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={BottomTabNavigator} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    );
    
};

export default DrawerNavigator;