import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  Text,
  ScrollView,
  StatusBar
} from 'react-native';
import { NavigationContext, NavigationProvider, StackNavigation } from '@exponent/ex-navigation';
import About from './scenes/About/'
import Store from './redux/store'
import Router from './../navigation/router'
import TabScreen from './../navigation/NavigationLayout'



export default class R10 extends Component {

  render() {
    const navigationContext = new NavigationContext({
      router: Router,
      store: Store,
    })
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StatusBar barStyle='light-content' />

          <StackNavigation
            id='root'
            initialRoute={Router.getRoute('tabscreen')} />
        </NavigationProvider>
      </Provider>
    );
  }
}

