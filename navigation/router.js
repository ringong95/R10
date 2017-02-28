import { createRouter } from '@exponent/ex-navigation';
import About from './../js/scenes/About'
import Tabscreen from './NavigationLayout';
import Schedule from './../js/scenes/Schedule'

export default Router = createRouter(() => ({
  about: () => About,
  tabscreen: ()=> Tabscreen,
  schedule: () => Schedule
}));