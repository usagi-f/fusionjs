// @flow

import React from 'react'
import App from 'fusion-react'
import Router from 'fusion-plugin-react-router'
import UniversalEvents, { UniversalEventsToken } from 'fusion-plugin-universal-events';
import Styletron from 'fusion-plugin-styletron-react'
import Redux, {
  ReduxToken,
  ReducerToken,
  GetInitialStateToken,
} from 'fusion-plugin-react-redux'
import root from './root.js'
import initialState from './redux/initialState'
import reducer from './redux/index'

export default () => {
  const app = new App(root)
  app.register(Styletron)
  app.register(Router)
  app.register(UniversalEventsToken, UniversalEvents)
  app.register(ReduxToken, Redux)
  __NODE__ && app.register(GetInitialStateToken, initialState)
  app.register(ReducerToken, reducer)
  return app
}
