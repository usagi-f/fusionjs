// @flow

import React from 'react'
import { styled } from 'fusion-plugin-styletron-react'
import Title from '../components/title'

const Center = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
})
const FullHeightDiv = styled('div', {
  height: '100%',
  backgroundColor: '#FFFFFF',
})

const Home = () => (
  <FullHeightDiv>
    <style>
      {`
        html,body,#root{height:100%;}
        html{font-family:HelveticaNeue-Light, Arial, sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}
        body{margin:0;}
        button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}
        input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}
        `}
    </style>
    <Center>
      <Title />
    </Center>
  </FullHeightDiv>
)

export default Home
