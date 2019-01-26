import React, { Component } from 'react';
import './css/ResultsPage.css';
import Issue from './components/Issue.js';
import LoadingSpinner from './components/LoadingSpinner.js';
import Exit from './assets/images/close.svg';

class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedState: "all", // Default state of issues to be viewed
    }
    this._handleFilterSelect = this._handleFilterSelect.bind(this);
  }

  _handleFilterSelect(e) {
    if (e.target.id === this.state.selectedState ||
      this.props.badUrl || this.props.isLoading ||
      this.props.issuesJSON.length === 0) {
      return;
    }
    document.getElementById(this.state.selectedState).className = "label-unselected";
    document.getElementById(e.target.id).className = "label-selected";
    document.getElementById("issue-content").scrollTop = 0;
    this.setState({selectedState: e.target.id});
  }

  _renderErrorMessage() {
    return (
      <p id="standalone-message">
        Please Enter a Valid GitHub Repo URL!
      </p>
    );
  }

  _renderIssues() {
    const status = this.state.selectedState;
    return this.props.issuesJSON.map((item) => {
      if ((status === "all" || status === item.state) ||
          (status === "pull-request" &&
          item.hasOwnProperty("pull_request") &&
          item.state === "open")
        ) {
          return (
            <Issue issue={item} key={item.node_id} />
          );
        } else {
          return null;
        }
    })
  }

  render() {
    return (
      <div id="results-page-hidden">
        <div id="results-header">
          <p id="header-title">
            GitHub Issue Viewer
          </p>
          <p id="url">
            {this.props.submittedText}
          </p>
        </div>
        <div id="results-content">
          <div id="exit">
            <img id="exit-button" src={Exit} onClick={this.props.onClick} alt="Exit" />
          </div>
          <div id="filter-labels">
            <p className="label-selected" id="all" onClick={this._handleFilterSelect}>
              All Issues
            </p>
            <p className="label-unselected" id="open" onClick={this._handleFilterSelect}>
              Open Issues
            </p>
            <p className="label-unselected" id="closed" onClick={this._handleFilterSelect}>
              Closed Issues
            </p>
            <p className="label-unselected"id="pull-request" onClick={this._handleFilterSelect}>
              Pull Requests
            </p>
          </div>
          {
            this.props.badUrl ?
            this._renderErrorMessage() :
            this.props.isLoading ?
            <LoadingSpinner /> :
            this.props.issuesJSON.length === 0 ?
            <p id="standalone-message">
              Nothing to show here.
            </p> :
            <div id="issue-content">
              {this._renderIssues()}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default ResultsPage;
