import React, { Component } from 'react';
import CirclesItems from '../commons/CirclesItems';

class CirclesItemsExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [
        { key: 111, icon: <i className="fas fa-graduation-cap" /> },
        { key: 222, icon: <i className="fas fa-laptop-code" /> },
        { key: 333, icon: <i className="fas fa-globe-americas" /> },
        { key: 444, icon: <i className="fas fa-republican" /> },
        { key: 555, icon: <i className="fas fa-calendar-alt" /> },
        { key: 666, icon: <i className="fas fa-car" /> },
        { key: 777, icon: <i className="far fa-envelope" /> }
      ]
    };
  }

  render() {
    return <CirclesItems entries={this.state.entries} />;
  }
}

export default CirclesItemsExample;
