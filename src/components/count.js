// @flow

import React, { Fragment } from 'react'
import { styled } from 'fusion-plugin-styletron-react'

const Button = styled('button', {
  fontSize: '24px',
  borderRadius: '5px',
  padding: '10px 20px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'black',
    color: 'white',
  },
})
const CountView = styled('p', {
  fontSize: '24px',
})

type Props = {
  count: number,
  handleIncrement: Function,
  handleDecrement: Function,
}

const Count: Function = (props: Props): React.Node => (
  <Fragment>
    <Button onClick={props.handleIncrement}>+1</Button>
    <Button onClick={props.handleDecrement}>-1</Button>
    <CountView>Count: {props.count}</CountView>
  </Fragment>
)

export default Count
