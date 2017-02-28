import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component } from 'react'
import { View, Text } from 'react-native';
import About from './../js/scenes/About'
import styles from './styles.js'

export default class TabScreen extends React.Component {
  renderIcon(title, iconName, isSelected) {
    let color = isSelected ? 'white' : '#999999';
    return (
      <View style={styles.tabItemContainer}>
        <Icon style={styles.icon} size={24} color={color} name={iconName} />
        <Text style={[styles.tabTitleText, { color }]} numberOfLines={1}>
          {title}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <TabNavigation
        tabBarColor="black"
        id="root"
        navigatorUID="root"
        initialTab="about">

        <TabItem
          id="about"
          renderIcon={(isSelected) => this.renderIcon('About', 'logo-twitch', isSelected)}>
          <StackNavigation

            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
          />
        </TabItem>
        <TabItem
          id="schedule"
          renderIcon={(isSelected) => this.renderIcon('Schedule', 'md-calculator', isSelected)}>
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