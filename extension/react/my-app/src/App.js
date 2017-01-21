import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UrlList from './components/url-list.js'

class App extends Component {

  urls = [
    "http://www.facebook.com"
  ]

  render() {
    return (
      <div className="App">
        <UrlList data={this.urls}/>
      </div>
    );
  }
}

export default App;
