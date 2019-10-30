import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'

import HomeScreen from './Containers/HomeScreen'
import ArticleScreen from './Containers/ArticleScreen'
import QuoteScreen from './Containers/QuoteScreen'
import ContactScreen from './Containers/ContactScreen'

import ArticleBisnisScreen from './Containers/ArticleBisnisScreen'
import ArticleTeknologiScreen from './Containers/ArticleTeknologiScreen'

import NotFoundScreen from './Containers/NotFoundScreen'

import './AppStyle.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="router-root">
          <HeaderComponent />

          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/article" component={ArticleScreen} />
            <Route exact path="/quote" component={QuoteScreen} />
            <Route exact path="/contact" component={ContactScreen} />
            <Route
              exact
              path="/article/bisnis-online"
              component={ArticleBisnisScreen}
            />
            <Route
              exact
              path="/article/jaringan-5g"
              component={ArticleTeknologiScreen}
            />
            <Route component={NotFoundScreen} />
          </Switch>

          <FooterComponent />
        </div>
      </Router>
    )
  }
}

export default App
