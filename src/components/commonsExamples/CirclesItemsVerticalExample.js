import React, { Component } from 'react';
import CirclesItemsVertical from '../commons/CirclesItemsVertical';
import Collapsible from 'react-collapsible';

class CirclesItemsVerticalExample extends Component {
  constructor(props) {
    super(props);
    this.ClickItem = this.ClickItem.bind(this);
    this.state = {
      entries: [
        {
          key: 111,
          icon: (
            <button className="buttons" onClick={() => this.ClickItem(111)}>
              <i className="fas fa-graduation-cap" />
            </button>
          ),
          additionalOptions: (
            <Collapsible ref={a => (this._inputElementName = a)}>
              <div>
                Step #4
                <br />
                <small>
                  <i>Description of the step</i>
                </small>
              </div>
            </Collapsible>
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

  ClickItem(event) {
    if (event === 111) {
      var input = this._inputElementName;
      if (input.state.isClosed) {
        input.openCollapsible();
      } else {
        input.closeCollapsible();
      }
    }
  }

  render() {
    return <CirclesItemsVertical entries={this.state.entries} />;
  }
}

export default CirclesItemsVerticalExample;
