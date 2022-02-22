import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import App from './App'

const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #212223;
  }`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Global />
  </React.StrictMode>,
  document.getElementById('root')
)
