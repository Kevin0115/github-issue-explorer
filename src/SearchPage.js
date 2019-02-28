import React, { Component } from 'react';
import MagIcon from './assets/images/search.svg';
import './css/SearchPage.css';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div id="search-page" className="preload">
        <p id="search-page-title">
          GitHub Issue Viewer
        </p>
        <form id="search-form" onSubmit={this.props.onSubmit} autoComplete="off">
          <div id="form-inputs">
            <div id="button-container">
              <input id="search-button" type="image" src={MagIcon} alt="Go!"/>
            </div>
            <input
              id="text-input"
              type="text"
              value={this.props.value}
              placeholder="Paste a link to a GitHub repo!"
              onChange={this.props.onChange}
              spellCheck={false}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchPage;
