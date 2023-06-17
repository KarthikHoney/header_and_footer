import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App
