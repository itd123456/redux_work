import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {
  // componentDidMount(){
    
  // }
  render(){
    return(
      <div>
        <h1>TEST</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    profile: state.user.profile
  }
}

export default connect(mapStateToProps)(App);

