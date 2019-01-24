import React, { Component } from 'react';

import './css/SearchPage.css';

import SearchPage from './SearchPage.js';
import ResultsPage from './ResultsPage.js';

class IssueExplorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMinimized: false,
      textInputVal: "",
      submittedText: "",
      issuesJSON: [],
      badUrl: true,
    }
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleExit = this._handleExit.bind(this);
  }

  _handleChange(textEvent) {
    this.setState({textInputVal: textEvent.target.value})
  }

  _handleSubmit(event) {
    document.getElementById("text-input").blur();
    document.getElementById("search-button").blur();
    document.getElementById("search-page").id = "search-page-hidden";
    document.getElementById("results-page-hidden").id = "results-page";
    this.setState({
      isMinimized: !this.state.isMinimized,
      submittedText: this.state.textInputVal,
    });
    this._retrieveIssuesJSON();
    event.preventDefault();
  }

  _handleExit() {
    this.setState({
      textInputVal: "",
      submittedText: "",
    });
    document.getElementById("search-page-hidden").id = "search-page";
    document.getElementById("results-page").id = "results-page-hidden";
  }

  _retrieveRepoPath() {
    if (this.state.textInputVal.includes("github.com")) {
      return this.state.textInputVal.split("github.com/").pop();
    } else {
      // If it's not a github.com url, indicate as so
      this.setState({badUrl: true});
    }
  }

  // PAGINATION!!!
  _retrieveIssuesJSON() {
    // For testing; make this more general
    const urlBase = "https://api.github.com/repos/"
    const repoPath = this._retrieveRepoPath();
    const params = "/issues?state=all&per_page=100"; // Default grab all issues

    fetch(urlBase + repoPath + params)
    // We'll send the GET request and check the status for bad URL
    .then(
      (response) => {
        // Parse the header here and determine number of pages
        // if (!response.headers.get("link").indexOf("next") > 0) {
        //   this.setState({noMorePages: true});
        // }
        if (response.status !== 200) {
          this.setState({badUrl: true});
          return [];
        } else {
          this.setState({badUrl: false});
        }
        return response.json();
    })
    // By this point, we've had a successful GET
    .then(
      (response) => {
      if (response.error) {
        console.warn('Error!', response.error);
      } else {
        this.setState({
          issuesJSON: response,
        });
      }
    })
    .catch((error) => {
      console.warn('Error: ', error);
    });
  }

  render() {
    return (
      <div id="issue-explorer">
        <SearchPage
          value={this.state.textInputVal}
          onChange={this._handleChange}
          onSubmit={this._handleSubmit}
        />
        <ResultsPage
          onClick={this._handleExit}
          submittedText={this.state.submittedText}
          issuesJSON={this.state.issuesJSON}
          badUrl={this.state.badUrl}
        />
      </div>
    );
  }
}

export default IssueExplorer;
