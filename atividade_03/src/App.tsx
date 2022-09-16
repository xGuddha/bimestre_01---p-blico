import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BotaoIncremento></BotaoIncremento>
      </header>
    </div>
  );
}

class BotaoIncremento extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
      desiredNumber: 0
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <div>
          <input
            type="number"
            onChange={event =>
              this.setState({ desiredNumber: parseInt(event.target.value) })
            }
          ></input>
          <button
            onClick={() =>
              this.setState({
                count: this.state.count + this.state.desiredNumber
              })
            }
          >
            Adicionar
          </button>
        </div>
        <div>
          <input
            type="number"
            onChange={event =>
              this.setState({ desiredNumber: parseInt(event.target.value) })
            }
          ></input>
          <button
            onClick={() =>
              this.setState({
                count: this.state.count - this.state.desiredNumber
              })
            }
          >
            Diminuir
          </button>
        </div>
        <button onClick={() => this.setState({ count: 0 })}>Reset</button>
      </div>
    );
  }
}

export default App;
