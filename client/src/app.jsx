import React from 'react';
import Nav from './pages/nav.jsx'
import { Router, Route, Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false
    };
  }

  navigate() {
    this.props.history.pushState(null, "/");
  }

  render() {
    const location = this.props;
    const divStyle = {
      backgroundColor: '#fff',
      width: '80%',
      margin: 'auto'
    };
    return (
      <div style={divStyle}>
        <Nav location={location}/>
        {this.props.children || <p> You are {!this.state.isSignedIn && 'not'} logged in. </p>}
      </div>
    )
  }
};

export default App;