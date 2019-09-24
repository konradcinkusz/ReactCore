import React, { Component } from 'react';
import CirclesItemsVertical from '../commons/CirclesItemsVertical';

class CirclesItemsVerticalExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [
        {
          key: 111,
          icon: <i className="fas fa-graduation-cap" />,
          additionalOptions: (
            <div>
              Step #4
              <br />
              <small>
                <i>Description of the step</i>
              </small>
            </div>
          )
        },
        {
          key: 222,
          icon: <i className="fas fa-laptop-code" />,
          additionalOptions: (
            <div>
              Step #5
              <br />
              <small>
                <i>Description of the step</i>
              </small>
            </div>
          )
        },
        { key: 333, icon: <i className="fas fa-globe-americas" /> },
        { key: 444, icon: <i className="fas fa-republican" /> },
        { key: 555, icon: <i className="fas fa-calendar-alt" /> },
        { key: 666, icon: <i className="fas fa-car" /> },
        { key: 777, icon: <i className="far fa-envelope" /> }
      ]
    };
  }

  render() {
    return <CirclesItemsVertical entries={this.state.entries} />;
  }
}

export default CirclesItemsVerticalExample;
