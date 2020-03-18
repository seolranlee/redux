import React, { Component } from 'react';

import './App.css';
import Counter from './components/Counter';
import PaletteContainer from './containers/PaletteContainer';
import CounterContainer from './containers/CounterContainer';
import WaitingList from './components/WaitingList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer />
        <CounterContainer />
        <WaitingList />
      </div>
    );
  }
}

export default App;
