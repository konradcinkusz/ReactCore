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
            <Collapsible open="true" ref={a => (this._inputElementName = a)}>
              <div>
                Education
                <br />
                <small>
                  <i>My key education points</i>
                </small>
              </div>
            </Collapsible>
          )
        },
        {
          key: 222,
          icon: (
            <button className="buttons" onClick={() => this.ClickItem(222)}>
              <i className="fas fa-laptop-code" />
            </button>
          ),
          additionalOptions: (
            <Collapsible open="true" ref={a => (this._inputElementStep2 = a)}>
              <div>
                Experience
                <br />
                <small>
                  <i>My professional experience</i>
                </small>
              </div>
            </Collapsible>
          )
        },
        { key: 333, icon: <i className="fas fa-globe-americas" /> },
        { key: 444, icon: <i className="fas fa-republican" /> },
        { key: 555, icon: <i className="fas fa-calendar-alt" /> },
        { key: 666, icon: <i className="fas fa-car" /> },
        { key: 777, icon: <i className="far fa-envelope" /> }
      ],
      theposition: ''
    };
  }

  //Get scroll position with Reactjs
  //https://stackoverflow.com/a/53158893/5493318
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    this.setState({
      theposition: scrolled
    });
  };

  ClickItem(event) {
    if (event === 111) {
      var input = this._inputElementName;
      if (input.state.isClosed) {
        input.openCollapsible();
      } else {
        input.closeCollapsible();
      }
    } else if (event === 222) {
      var input = this._inputElementStep2;
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
