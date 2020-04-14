import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React, { Component } from 'react';


import './styles/navbar.scss'

class VerticalTabs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <Tabs
          value={this.props.activeTab}
          onChange={this.props.handleChange}
          orientation="vertical"
          variant="scrollable"
          aria-label="Vertical tabs example"
          className="classes.tabs"
        >
          {
            (() => this.props.labels.map((currentLabel) => {
              return (
                <Tab label={currentLabel} />

              );

            }))()}
        </Tabs>
      </div>
    );
  }
}

export default VerticalTabs;
