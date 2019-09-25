import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import { isEqual } from 'lodash';
import './CirclesItems.css';

/*
 *https://codepen.io/ccondrup/pen/bqbGWB?editors=1100
 *https://codepen.io/bookcasey/pen/cEntL
 */
class CirclesItems extends Component {
  constructor(props) {
    super(props);

    this.createTask = this.createTask.bind(this);
  }

  createTask(item) {
    var isActive = '';
    // if (item.key === 333) {
    //   isActive = 'active';
    // }

    var description = 'Example';
    if (typeof item.description !== 'undefined') {
      description = item.description;
    }

    return (
      <li key={item.key} className={isActive}>
        {item.icon}
        <p>{description}</p>
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
