import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@exponent/ex-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { View, Text, Platform } from 'react-native';
import About from '../scenes/About'
import { styles } from './styles.js'
import { colors } from '../config/styles'

export default class DrawerNavigationLayout extends React.Component {


  renderIcon(iconName, isSelected) {
    let color = isSelected ? colors.Purple : colors.MediumGrey;
    return (
      <Icon style={styles.icon} size={24} color={color} name={iconName} />
    );
  }
  renderTitle(title, isSelected) {
    let color = isSelected ? colors.Purple : colors.MediumGrey;
    return (
      <Text style={[styles.tabTitleText, { color }]} numberOfLines={1}>
        {title}
      </Text>
    );
  }
  renderHeader = () => {
    return (
      <View style={styles.header}>
      </View>
    );
  };  
  render() {
    const defaultRouteConfig = {
      
    }
    return (
      <DrawerNavigation
        id='root'
        initialItem='schedule'
        drawerWidth={200}
        renderHeader={this.renderHeader}
      >
        <DrawerNavigationItem
          id="about"
          title="About"
          renderIcon={(isSelected) => this.renderIcon('md-information-circle', isSelected)}
          renderTitle={(isSelected) => this.renderTitle('About', isSelected)} >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="schedule"
          title="Schedule"
          renderIcon={(isSelected) => this.renderIcon('md-calendar', isSelected)}
          renderTitle={(isSelected) => this.renderTitle('Schedule', isSelected)} >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="faves"
          title="faves"
          renderIcon={(isSelected) => this.renderIcon('md-heart', isSelected)}
          renderTitle={(isSelected) => this.renderTitle('Faves', isSelected)} >
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute('faves')}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }
}
