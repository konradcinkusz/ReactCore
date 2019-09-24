import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import { isEqual } from 'lodash';
import './CirclesItems.css';

class CirclesItems extends Component {
  constructor(props) {
    super(props);

    this.createTask = this.createTask.bind(this);
  }

  createTask(item) {
    var isActive = '';
    if (item.key === 333) {
      isActive = 'active';
    }
    return (
      <li key={item.key} className={isActive}>
        {item.icon}
      </li>
    );
  }

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTask);
    return (
      <ul className="circleList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default CirclesItems;
