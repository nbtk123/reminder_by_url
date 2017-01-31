import React, { Component } from 'react';
import './App.css';
import UrlList from '../components/url-list.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UrlActions from '../actions';

class App extends Component {
  
  componentDidMount() {
    // setTimeout(() => {this.props.actions.receiveUrls([
    //     {url: "http://www.facebook.com", messages:["Don't put your blame on me", "Don't put your blame on him"]}
    //   ]);}, 3000);
    this.props.actions.fetchUrls();
  }

  render() {
    return (
      <div className="App">
        <UrlList data={this.props.urls}/>
      </div>
    );
  }
}

App.propTypes = {
  urls: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  urls: state.urls
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(UrlActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)