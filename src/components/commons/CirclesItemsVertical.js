import React, { Component } from "react";
import FlipMove from "react-flip-move";
import { isEqual } from "lodash";
import "./CirclesItemsVertical.css";

/*
 *https://codepen.io/ccondrup/pen/bqbGWB?editors=1100
 *https://codepen.io/bookcasey/pen/cEntL
 */
class CirclesItemsVertical extends Component {
  constructor(props) {
    super(props);

    this.createTask = this.createTask.bind(this);
  }

  createTask(item) {
    var isActive = "passed";
    // if (item.key === 333) {
    //   isActive = 'current';
    // } else if (item.key < 333) {
    //   isActive = 'passed';
    // }
    return (
      <li key={item.key} className={isActive}>
        {item.icon}
        {item.additionalOptions}
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
      <div className="InternalUL">
        <ul className="circleListV">
          <FlipMove duration={250} easing="ease-out">
            {listItems}
          </FlipMove>
        </ul>
      </div>
    );
  }
}

export default CirclesItemsVertical;
