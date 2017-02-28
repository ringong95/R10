import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component } from 'react'
import About from './../js/scenes/About'

export default class TabScreen extends React.Component {
  render() {
    return (
      <TabNavigation
        id="root"
        navigatorUID="root"
        initialTab="about">

        <TabItem
          id="about"
          title="About"
          renderIcon={(isSelected) =>  <Icon name="logo-twitch"/> }>
          
          
          
          <StackNavigation

            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
          />
        </TabItem>
        <TabItem
          id="schedule"
          title="Schedule"
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}