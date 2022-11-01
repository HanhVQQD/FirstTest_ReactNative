import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/index';
import Add from '../screens/Add';
import Card from '../screens/Card';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';

import Icon from 'react-native-vector-icons/AntDesign';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator sceneContainerStyle={{backgroundColor: 'white'}}>
      <BottomTab.Screen
        name="HomeTab"
        component={Home}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {},
            tabBarIcon: ({focused}) => (
              <Icon style={{color: focused ? 'red' : 'black'}} name="home" size={30} color="black" />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="NotificationTab"
        component={Notification}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {},
            tabBarIcon: ({focused}) => (
              <Icon style={{color: focused ? 'red' : 'black'}} name="notification" size={30} color="black" />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="AddTab"
        component={Add}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {},
            tabBarIcon: ({focused}) => (
              <Icon style={{color: focused ? 'red' : 'black'}} name="addfile" size={30} color="black" />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="CardTab"
        component={Card}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {},
            tabBarIcon: ({focused}) => (
              <Icon style={{color: focused ? 'red' : 'black'}} name="shoppingcart" size={30} color="black" />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="ProfileTab"
        component={Profile}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {},
            tabBarIcon: ({focused}) => (
              <Icon style={{color: focused ? 'red' : 'black'}} name="smile-circle" size={30} color="black" />
            ),
            headerShown: false,
          };
        }}
      />
    </BottomTab.Navigator>
    
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  icon: {width: 30, height: 30},
});
