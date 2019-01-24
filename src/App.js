import React, { Component } from 'react';
import './App.css';

import IssueExplorer from './IssueExplorer.js';

import './css/SearchPage.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IssueExplorer />
      </div>
    );
  }
}

export default App;
