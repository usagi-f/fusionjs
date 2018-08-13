// @flow

import React from 'react'
import { styled } from 'fusion-plugin-styletron-react'

const TitleText = styled('h1', {
  fontSize: '80px',
  fontWeight: 'normal',
  color: 'rgba(0,0,0,.8)',
  paddingRight: '30px',
  display: 'flex',
})

const Title: Function = (): React.Node => <TitleText>Fusion.js</TitleText>

export default Title
