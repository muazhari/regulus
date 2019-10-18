import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import HeaderComponent from './Components/HeaderComponent'

import HomeScreen from './Containers/HomeScreen'
import ArticleScreen from './Containers/ArticleScreen'
import AboutScreen from './Containers/AboutScreen'

import NotFoundScreen from './Containers/NotFoundScreen'

import './AppStyle.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderComponent />

          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/article" component={ArticleScreen} />
            <Route component={NotFoundScreen} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App