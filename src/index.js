import React from 'react'
import ReactDom from 'react-dom'
import Home from './Home'

const App = () => (
  <div>
    <h1>Hola!</h1>
    <Home />
  </div>
)

ReactDom.render(
  <App/>,
  document.getElementById('root')
)
