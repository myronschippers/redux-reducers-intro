import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enteredKittyName: '',
      enteredDoggoName: '',
    }
  }

  clickMe = (event) => {
     this.props.dispatch({ type: 'KITTY', kittyName: this.state.enteredKittyName  });
  }

  addDoggo = (event) => {
    const dispatchedObject = {
      type: 'DOGGO',
      dog: this.state.enteredDoggoName,
    };

    this.props.dispatch(dispatchedObject);
  }

  changeField = (event) => {
    const stateUpdate = {};
    const inputStateType = event.target.dataset.type;
    const inputValue = event.target.value;

    if (inputStateType === 'kitty') {
      stateUpdate.enteredKittyName = inputValue;
    } else if (inputStateType === 'doggo') {
      stateUpdate.enteredDoggoName = inputValue;
    }

    this.setState(stateUpdate);
  }

  render() {
    const kittyArray = this.props.reduxState.firstReducer.map((what, where) => {
      return <li key={where}>{what}</li>
    });

    const doggoArray = this.props.reduxState.secondReducer.map((what, where) => {
      return <li key={where}>{what}</li>
    });

    return (
      <div className="App">
        <h1>React Reducers Intro</h1>

        <div>
          <input placeholder="Kitty Name" onChange={this.changeField} data-type="kitty" />
          <button onClick={this.clickMe}>Click Me</button>
        </div>
        
        <div>
          <input placeholder="Doggo Name" onChange={this.changeField} data-type="doggo" />
          <button onClick={this.addDoggo}>Add Doggo</button>
        </div>

        <div className="blocks">
          <div>
            <h2>Current Kitty Names:</h2>
            <ul>
              {kittyArray}
            </ul>
          </div>

          <div>
            <h2>Current Doggo Names:</h2>
            <ul>
              {doggoArray}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);