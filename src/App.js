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
    const kittyArray = this.props.reduxState.firstReducer.map((what, where) => {
      return <li key={where}>{what}</li>
    });
    return (
      <div className="App">
        <h1>React Reducers Intro</h1>
        <p>Current Kitty Names:</p>
        <ul>
          {kittyArray}
        </ul>
        <input placeholder="Kitty Name" onChange={this.changeKittyName} />
        <button onClick={this.clickMe}>Click Me</button>
        <br />
        <input placeholder="Doggo Name" />
        <button onClick={this.noClickMe}>No Click Me</button>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);