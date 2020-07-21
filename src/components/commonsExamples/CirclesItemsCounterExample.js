import React, { Component } from "react";
import CirclesItems from "../commons/CirclesItems";
import AnimatedNumber from "react-animated-number";

class CirclesItemsCounterExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [
        {
          key: 111,
          icon: (
            <AnimatedNumber
              frameStyle={perc => (perc === 100 ? {} : { backgroundColor: "" })}
              stepPrecision={0}
              value={2}
              duration={3000}
            />
          ),
          description: (
            <div>
              Levels of <i className="fas fa-graduation-cap" />
            </div>
          )
        },
        {
          key: 222,
          icon: (
            <AnimatedNumber
              frameStyle={perc => (perc === 100 ? {} : { backgroundColor: "" })}
              stepPrecision={0}
              value={5}
              duration={3000}
            />
          ),
          description: (
            <div>
              Years of <i className="fas fa-chalkboard-teacher" />
            </div>
          )
        },
        {
          key: 333,
          icon: (
            <AnimatedNumber
              frameStyle={perc => (perc === 100 ? {} : { backgroundColor: "" })}
              stepPrecision={0}
              value={10}
              duration={3000}
            />
          ),
          description: (
            <div>
              <i className="fas fa-laptop-code" />
              languages
            </div>
          )
        },
        {
          key: 444,
          icon: (
            <AnimatedNumber
              frameStyle={perc => (perc === 100 ? {} : { backgroundColor: "" })}
              stepPrecision={0}
              value={4}
              duration={3000}
            />
          ),
          description: <div>Companies</div>
        },
        {
          key: 555,
          icon: (
            <AnimatedNumber
              frameStyle={perc => (perc === 100 ? {} : { backgroundColor: "" })}
              stepPrecision={0}
              value={10}
              duration={3000}
            />
          ),
          description: (
            <div>
              <i className="fas fa-tasks" />
              completed
            </div>
          )
        }
      ],
      style: {
        color: "red",
        backgroundColor: "#000",
        width: "100%",
        fontSize: "2em"
      }
    };
  }

  render() {
    return <CirclesItems entries={this.state.entries} />;
  }
}

export default CirclesItemsCounterExample;
