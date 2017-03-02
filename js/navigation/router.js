import { createRouter } from '@exponent/ex-navigation';

import Tabscreen from './NavigationLayout';
import About from '../scenes/About'
import Schedule from '../scenes/Schedule'
import Session from '../scenes/Session'
import Speaker from '../scenes/Speaker'

export default Router = createRouter(() => ({
  about: () => About,
  speaker: () => Speaker,
  tabscreen: () => Tabscreen,
  schedule: () => Schedule,
  session: () => Session,


}));