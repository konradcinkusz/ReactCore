import React, { Component } from 'react';
import CirclesItemsVertical from '../commons/CirclesItemsVertical';
import Collapsible from 'react-collapsible';
import './CirclesItemsVerticalExample.css';

class CirclesItemsVerticalExample extends Component {
  constructor(props) {
    super(props);
    this.ClickItem = this.ClickItem.bind(this);
    this.state = {
      entries: [
        {
          key: 111,
          icon: (
            <button
              className="buttons"
              onClick={() => this.ClickItem(111)}
              ref={a => (this._buttonEducationStep = a)}
            >
              <i className="fas fa-graduation-cap" />
            </button>
          ),
          additionalOptions: (
            <Collapsible ref={a => (this._collapsibleEducationStep = a)}>
              <div>
                Education
                <br />
                <small>
                  <i>My key education points</i>
                </small>
                <div className="row">
                  <div className="col-6 col-sm-6 col-lg-4">
                    <h3>Secondary Education</h3>
                    <p>
                      <center>
                        <img src={require('./patron.jpg')} />
                      </center>
                    </p>
                    <p>
                      I graduated secondary school in maths and physics
                      specialization
                    </p>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-4">
                    <h3>Higher Education</h3>
                    <p>
                      <center>
                        <img src={require('./logotype_polibuda.jpg')} />
                      </center>
                    </p>
                    <p>
                      Technical University of Lodz, Diploma in Computer Science
                    </p>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-4">
                    <h3>Specialization</h3>
                    <p>
                      <center>
                        <img src={require('./logo_weeia.png')} />
                      </center>
                    </p>
                    <p>
                      Department of electronics; Institute of Applied Computer
                      Science; Computer Science;
                    </p>
                  </div>
                </div>
              </div>
            </Collapsible>
          )
        },
        {
          key: 222,
          icon: (
            // className={`${this.errorFuelTypeClass(this.state.carFuelDropDownValid)}`}
            <button
              className="buttons"
              onClick={() => this.ClickItem(222)}
              ref={a => (this._buttonExperienceStep = a)}
            >
              <i className="fas fa-laptop-code" />
            </button>
          ),
          additionalOptions: (
            <Collapsible ref={a => (this._collapsibleExperienceStep = a)}>
              <div>
                Experience
                <br />
                <small>
                  <i>My professional experience</i>
                </small>
              </div>
              <div className="row">
                <div className="col-6 col-sm-6 col-lg-4">
                  <h3>Programmer mid. lvl</h3>
                  <p>
                    <center>
                      <img src={require('./experience/tme.png')} />
                    </center>
                  </p>
                  <p>
                    <small>
                      I am working as a programmer in TME in .NET technology
                    </small>
                  </p>
                  <p>
                    <a
                      className="btn btn-default"
                      href="https://www.tme.eu/pl/"
                      role="button"
                    >
                      View TME site &raquo;
                    </a>
                  </p>
                </div>
                <div className="col-6 col-sm-6 col-lg-4">
                  <h3>Programmer mid./jun. lvl</h3>
                  <p>
                    <center>
                      <img src={require('./experience/Fabrity.jpg')} />
                    </center>
                  </p>
                  <p>
                    <small>I am working in Fabrity as a programmer</small>
                  </p>
                  <p>
                    <a
                      className="btn btn-default"
                      href="https://www.fabrity.pl/"
                      role="button"
                    >
                      View Fabrity site &raquo;
                    </a>
                  </p>
                </div>
                <div className="col-6 col-sm-6 col-lg-4">
                  <h3>Intern</h3>
                  <p>
                    <center>
                      <img src={require('./experience/oracle-logo.png')} />
                    </center>
                  </p>
                  <p>
                    <small>
                      I have an internship in Oracle Polska. I do things with
                      Oracle Mobile Application Framework
                    </small>
                  </p>
                  <p>
                    <a
                      className="btn btn-default"
                      href="https://www.oracle.com/pl/index.html"
                      role="button"
                    >
                      View Oracle Polska site &raquo;
                    </a>
                  </p>
                </div>
                <div className="col-6 col-sm-6 col-lg-4">
                  <h3>IT maintenance and Sales</h3>
                  <p>
                    <center>
                      <img src={require('./experience/satserwis-logo.png')} />
                    </center>
                  </p>
                  <p>
                    <small>
                      In family buissness I worked in site maintenance and as a
                      Sales Support
                    </small>
                  </p>
                  <p>
                    <a
                      className="btn btn-default"
                      href="https://sklep.saterwis.pl"
                      role="button"
                    >
                      View Sat-Serwis site &raquo;
                    </a>
                  </p>
                </div>
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

  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  expandCollapsibles = async () => {
    await this.sleep(100);
    var input = [];
    input.push({
      btn: this._buttonEducationStep,
      value: this._collapsibleEducationStep
    });
    input.push({
      btn: this._buttonExperienceStep,
      value: this._collapsibleExperienceStep
    });

    for (var i = 0; i < input.length; i++) {
      input[i].btn.className = input[i].btn.className + ' isHover';
      if (input[i].value.state.isClosed) {
        input[i].value.openCollapsible();
      }
      await this.sleep(370);
      input[i].btn.className = 'buttons';
    }
  };

  //Get scroll position with Reactjs
  //https://stackoverflow.com/a/53158893/5493318
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
    this.expandCollapsibles();
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
      var input = this._collapsibleEducationStep;
      if (input.state.isClosed) {
        input.openCollapsible();
      } else {
        input.closeCollapsible();
      }
    } else if (event === 222) {
      var input = this._collapsibleExperienceStep;
      if (input.state.isClosed) {
        input.openCollapsible();
      } else {
        input.closeCollapsible();
      }
    }
  }

  render() {
    return (
      <div>
        <CirclesItemsVertical entries={this.state.entries} />
      </div>
    );
  }
}

export default CirclesItemsVerticalExample;
