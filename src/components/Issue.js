import React, { Component } from 'react';
import '../css/Issue.css';

import Bullet from '../assets/images/circle.svg';
import PR from '../assets/images/pull-request.svg';
import Closed from '../assets/images/issue-closed.svg';

class Issue extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  _renderLabels() {
    return this.props.issue.labels.map((label, i) => {
      return (
        <div className="label-background" key={i}>
          <img className="bullet" src={Bullet} alt="o" />
          <p className="label-name">
            {label.name.split(":").pop()}
          </p>
        </div>
      );
    })
  }

  _renderStatusSymbol() {
    if (this.props.issue.state === "open") {
      // We'll only mark PRs if they're open; otherwise label as closed
      if (this.props.issue.hasOwnProperty("pull_request")) {
        return (
          <img className="status-symbol" src={PR} alt="P"/>
        );
      } else {
        return null;
      }
    } else {
      return (
        <img className="status-symbol" src={Closed} alt="C"/>
      );
    }
  }

  _renderIssueBody() {
    if (this.props.issue.body.length > 0) {
      return (
        <p className="issue-body">
          {this.props.issue.body}
        </p>
      );
    } else {
      return (
        <p className="no-body">
          No description provided
        </p>
      );
    }
  }

  render() {
    return (
      <div className="issue">
        <div className="issue-header">
          <div className="issue-status">
            {this._renderStatusSymbol()}
          </div>
          <div className="title-container">
            <p className="issue-title">{this.props.issue.title}</p>
          </div>
        </div>
        <div className="issue-content">
          {this._renderIssueBody()}
          <div className="issue-labels">
            {this._renderLabels()}
          </div>
        </div>
        
      </div>
    );
  }
}

export default Issue;
