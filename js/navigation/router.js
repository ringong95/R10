import { createRouter } from '@exponent/ex-navigation';

import Tabscreen from './NavigationLayout';
import About from '../scenes/About'
import Schedule from '../scenes/Schedule'

export default Router = createRouter(() => ({
  about: () => About,
  tabscreen: ()=> Tabscreen,
  schedule: () => Schedule
}));