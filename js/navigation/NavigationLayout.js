import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { View, Text } from 'react-native';
import About from '../scenes/About'
import { styles } from './styles.js'
import { colors } from '../config/styles'

export default class TabScreen extends React.Component {


  renderIcon(iconName, isSelected) {
    let color = isSelected ? 'white' : colors.MediumGrey;
    return (
      <Icon style={styles.icon} size={24} color={color} name={iconName} />
    );
  }
  renderTitle(title, isSelected) {
    let color = isSelected ? 'white' : colors.MediumGrey;
    return (
      <Text style={[styles.tabTitleText, { color }]} numberOfLines={1}>
        {title}
      </Text>
    );
  }
  render() {
    const defaultRouteConfig = {
      
    }
    return (
      <TabNavigation
        tabBarColor="black"
        initialTab="schedule">
        <TabItem
          id="about"
          title="About"
          renderIcon={(isSelected) => this.renderIcon('logo-twitch', isSelected)}
          renderTitle={(isSelected) => this.renderTitle('About', isSelected)} >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
          />
        </TabItem>
        <TabItem
          id="schedule"
          title="Schedule"
          renderIcon={(isSelected) => this.renderIcon('ios-calendar', isSelected)}
          renderTitle={(isSelected) => this.renderTitle('Schedule', isSelected)} >
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