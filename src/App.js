import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
import mapReduxStateToProps from './modules/mapReduxStateToProps';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enteredKittyName: ''
    }
  }
  clickMe = (event) => {
     this.props.dispatch({ type: 'KITTY', kittyName: this.state.enteredKittyName  });
  }

  noClickMe = (event) => {
    this.props.dispatch({ type: 'DOGGO' });
  }

  changeKittyName = (event) => {
    this.setState({
      enteredKittyName: event.target.value
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>React Reducers Intro</h1>
        <p>Current Kitty Name: {this.props.reduxState.firstReducer.kittyList}</p>
        <input placeholder="Kitty Name" onChange={this.changeKittyName} />
        <button onClick={this.clickMe}>Click Me</button>
        <br />
        <button onClick={this.noClickMe}>No Click Me</button>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);