import React, { Component } from 'react';
import { Provider } from 'react-redux/native';
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



export default class R10 extends Component {

  render() {
    const navigationContext = new NavigationContext({
      router: Router,
      store: Store,
    })
    return (
      <Provider store={Store}>
        <NavigationProvider router={Router}>
          <StatusBar barStyle='light-content' />

          <StackNavigation initialRoute={Router.getRoute('about')} />
        </NavigationProvider>
      </Provider>
    );
  }
}

