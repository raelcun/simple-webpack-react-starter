import React from 'react'
import Content from './components/Content'
import Header from './components/Header'
import Favicon from 'react-favicon'

const faviconUrl = require('./assets/favicon.ico');

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <Favicon url={ faviconUrl }/>
      </div>
    )
  }
}
