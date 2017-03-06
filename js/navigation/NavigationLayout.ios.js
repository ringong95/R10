import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { View, Text, Platform } from 'react-native';
import About from '../scenes/About'
import { styles } from './styles.js'
import { colors, typography } from '../config/styles'
import LinearGradient from 'react-native-linear-gradient';


const defaultRouteConfig = {
  navigationBar: {
    titleStyle: styles.titleStyle,
    renderBackground: () => (
      <LinearGradient
        start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 0.0 }}
        colors={[colors.Red, colors.Purple]}
        style={styles.linearGradient} />
    ),
  }
}

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
    return (
      <TabNavigation
        tabBarColor="black"
        initialTab="schedule">
        <TabItem
          id="about"
          title="About"
          renderIcon={(isSelected) => this.renderIcon('ios-information-circle', isSelected)}
          renderTitle={(isSelected) => this.renderTitle('About', isSelected)} >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
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
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
        <TabItem
          id="faves"
          title="faves"
          renderIcon={(isSelected) => this.renderIcon('ios-heart', isSelected)}
          renderTitle={(isSelected) => this.renderTitle('Faves', isSelected)} >
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute('faves')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}