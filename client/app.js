import React from 'react'
import Header from './header'
import Leagues from './leagues'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Leagues />
      </div>
    )
  }
}
