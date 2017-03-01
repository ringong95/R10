import { createRouter } from '@exponent/ex-navigation';

import Tabscreen from './NavigationLayout';
import About from '../scenes/About'
import Schedule from '../scenes/Schedule'
import Session from '../scenes/Session'

export default Router = createRouter(() => ({
  about: () => About,
  tabscreen: ()=> Tabscreen,
  schedule: () => Schedule,
  session: () => Session,
}));