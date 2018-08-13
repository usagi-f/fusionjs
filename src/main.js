// @flow

import React from 'react'
import App from 'fusion-react'
import Router from 'fusion-plugin-react-router'
import Styletron from 'fusion-plugin-styletron-react'
import Redux, {
  ReduxToken,
  ReducerToken,
  GetInitialStateToken,
} from 'fusion-plugin-react-redux'
import root from './root.js'
import reducers from './reducers'

const getInitialState = ctx => {
  return {
    count: 0
  }
}

export default () => {
  const app = new App(root)
  app.register(Styletron)
  app.register(Router)
  app.register(ReduxToken, Redux)
  __NODE__ && app.register(GetInitialStateToken, getInitialState)
  app.register(ReducerToken, reducers)
  return app
}
