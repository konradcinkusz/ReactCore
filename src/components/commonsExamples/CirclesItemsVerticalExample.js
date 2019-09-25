import React, { Component } from 'react';
import CirclesItemsVertical from '../commons/CirclesItemsVertical';
import Collapsible from 'react-collapsible';
import './CirclesItemsVerticalExample.css';
import CirclesItemsCounterExample from './CirclesItemsCounterExample';

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
              <div className="collapsible">
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
              <div className="collapsible">
                Experience
                <br />
                <small>
                  <i>My professional experience</i>
                </small>
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
                        In family buissness I worked in site maintenance and as
                        a Sales Support
                      </small>
                    </p>
                    <p>
                      <a
                        className="btn btn-default"
                        href="https://sklep.satserwis.pl/"
                        role="button"
                      >
                        View Sat-Serwis site &raquo;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Collapsible>
          )
        },
        {
          key: 333,
          icon: (
            <button
              className="buttons"
              onClick={() => this.ClickItem(333)}
              ref={a => (this._buttonProSkillStep = a)}
            >
              <i className="fas fa-globe-americas" />
            </button>
          ),
          additionalOptions: (
            <Collapsible ref={a => (this._collapsibleProSkillStep = a)}>
              <div className="collapsible">
                Professional skills
                <br />
                <small>
                  <i>My professional skills</i>
                </small>
                <div className="row">
                  <div className="col-6 col-sm-6 col-lg-4">
                    <h3>Language</h3>
                    <p>
                      <center>
                        <img src={require('./skills/csharp.jpg')} />
                      </center>
                    </p>
                    <p>
                      My main languages which I used through my programmer
                      career.
                    </p>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-4">
                    <h3>Language</h3>
                    <p>
                      <center>
                        <img src={require('./skills/JavaScript-logo.png')} />
                      </center>
                    </p>
                    <p>As a webdeveloper I was forced to use JavaScript.</p>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-4">
                    <h3>Language</h3>
                    <p>
                      <center>
                        <img src={require('./skills/python.jpg')} />
                      </center>
                    </p>
                    <p>
                      Lastly, my additional programming lanugage is Python. I
                      used this language to project machine learning
                      infrastructure.
                    </p>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-4">
                    <h3>Technology</h3>
                    <p>
                      <center>
                        <img src={require('./skills/react-redux.png')} />
                      </center>
                    </p>
                    <p>
                      This is one of my freshest hobby. I am now focused on
                      react because I really like it!
                    </p>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-4">
                    <h3>Technology</h3>
                    <p>
                      <center>
                        <img src={require('./skills/netFramework.png')} />
                      </center>
                    </p>
                    <p>
                      As every .net developer I used standard .net framework
                      libraries from 3.5 version but I have been a member of two
                      project written in 2 version.
                    </p>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-4">
                    <h3>Technology</h3>
                    <p>
                      <center>
                        <img src={require('./skills/netCore.jpg')} />
                      </center>
                    </p>
                    <p>
                      For .Net developers it is normal to learn and used .net
                      core.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-lg-4">
                  <h3>Technology</h3>
                  <p>
                    <center>
                      <img src={require('./skills/netMVC.jpg')} />
                    </center>
                  </p>
                  <p>
                    One of my lieblings technology is ASP.NET MVC 5 - I think it
                    is the best!
                  </p>
                </div>
                <div className="col-6 col-sm-6 col-lg-4">
                  <h3>Technology</h3>
                  <p>
                    <center>
                      <img src={require('./skills/sklearn.png')} />
                    </center>
                  </p>
                  <p>
                    Which programmer who are creating machine learning project
                    doesn't use sklearn library?
                  </p>
                </div>
              </div>
            </Collapsible>
          )
        },
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
    input.push({
      btn: this._buttonProSkillStep,
      value: this._collapsibleProSkillStep
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
    var input = '';
    switch (event) {
      case 111:
        input = this._collapsibleEducationStep;
        break;
      case 222:
        input = this._collapsibleExperienceStep;
        break;
      case 333:
        input = this._collapsibleProSkillStep;
        break;
      default:
        return;
    }

    if (input.state.isClosed) {
      input.openCollapsible();
    } else {
      input.closeCollapsible();
    }
  }

  render() {
    return (
      <div>
        <div className="row collapsible">
          <div className="col-6 col-sm-6 col-lg-4">
            <h3>Konrad Cinkusz</h3>
            <p>
              <center>
                <img className="mainPhoto" src={require('./myPhoto.png')} />
              </center>
            </p>
            <span>
              <center>Software Engineer</center>
            </span>
          </div>
          <div className="col-6 col-sm-6 col-lg-4">
            <p>
              I am software engineer with at least 4 years experience in
              commercial programming. I worked at bank, military and warehouse
              sectors. I am programming in C# languages and developing my
              abilities in .Net platform. I was studying computer science in
              Technical University at Lodz and graduated with engineer degree.
            </p>
          </div>
        </div>
        <CirclesItemsCounterExample />
        <CirclesItemsVertical entries={this.state.entries} />
      </div>
    );
  }
}

export default CirclesItemsVerticalExample;
