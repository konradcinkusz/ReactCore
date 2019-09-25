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
            <button className="buttons" onClick={() => this.ClickItem(111)}>
              <i className="fas fa-graduation-cap" />
            </button>
          ),
          additionalOptions: (
            <Collapsible ref={a => (this._inputElementName = a)}>
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
                      2005 volkswagen jetta 2.5 for sale has 110,000 miles
                      powere doors,power windows,has ,car drives excellent
                      ,comes with warranty if you&#39;re ...
                    </p>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-4">
                    <h3>Secondary Education</h3>
                    <p>
                      <center>
                        <img src={require('./logotype_polibuda.jpg')} />
                      </center>
                    </p>
                    <p>
                      2005 volkswagen jetta 2.5 for sale has 110,000 miles
                      powere doors,power windows,has ,car drives excellent
                      ,comes with warranty if you&#39;re ...
                    </p>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-4">
                    <h3>Secondary Education</h3>
                    <p>
                      <center>
                        <img src={require('./logo_weeia.png')} />
                      </center>
                    </p>
                    <p>
                      2005 volkswagen jetta 2.5 for sale has 110,000 miles
                      powere doors,power windows,has ,car drives excellent
                      ,comes with warranty if you&#39;re ...
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
            <button className="buttons" onClick={() => this.ClickItem(222)}>
              <i className="fas fa-laptop-code" />
            </button>
          ),
          additionalOptions: (
            <Collapsible ref={a => (this._inputElementStep2 = a)}>
              <div>
                Experience
                <br />
                <small>
                  <i>My professional experience</i>
                </small>
              </div>
              <div className="row">
                <div className="col-6 col-sm-6 col-lg-4">
                  <h3>
                    2005 Volkswagen Jetta 2.5 Sedan (worcester
                    http://www.massmotorcars.com) $6900
                  </h3>
                  <p>
                    <center>
                      <img src={require('./patron.jpg')} />
                    </center>
                  </p>
                  <p>
                    <small>
                      2005 volkswagen jetta 2.5 for sale has 110,000 miles
                      powere doors,power windows,has ,car drives excellent
                      ,comes with warranty if you&#39;re ...
                    </small>
                  </p>
                  <p>
                    <a
                      className="btn btn-default"
                      href="/search/1355/detail/"
                      role="button"
                    >
                      View details &raquo;
                    </a>
                    <button type="button" className="btn bookmark" id="1355">
                      <span
                        className="
                  glyphicon glyphicon-star-empty "
                      ></span>
                    </button>
                  </p>
                </div>
                <div className="col-6 col-sm-6 col-lg-4">
                  <h3>
                    2006 Honda Civic EX Sedan (Worcester www.massmotorcars.com)
                    $7950
                  </h3>
                  <p>
                    <small>
                      2006 honda civic ex has 110,176 miles, has power doors
                      ,power windows,sun roof,alloy wheels,runs great, cd
                      player, 4 cylinder engen, ...
                    </small>
                  </p>
                  <p>
                    <a
                      className="btn btn-default"
                      href="/search/1356/detail/"
                      role="button"
                    >
                      View details &raquo;
                    </a>
                    <button type="button" className="btn bookmark" id="1356">
                      <span
                        className="
                  glyphicon glyphicon-star-empty "
                      ></span>
                    </button>
                  </p>
                </div>
                <div className="col-6 col-sm-6 col-lg-4">
                  <h3>
                    2004 Honda Civic LX Sedan (worcester www.massmotorcars.com)
                    $5900
                  </h3>
                  <p>
                    <small>
                      2004 honda civic lx sedan has 134,000 miles, great looking
                      car, interior and exterior looks nice,has cd player, power
                      windows ...
                    </small>
                  </p>
                  <p>
                    <a
                      className="btn btn-default"
                      href="/search/1357/detail/"
                      role="button"
                    >
                      View details &raquo;
                    </a>
                    <button type="button" className="btn bookmark" id="1357">
                      <span
                        className="
                  glyphicon glyphicon-star-empty "
                      ></span>
                    </button>
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

  doSomething = async () => {
    await this.sleep(1000);
    var input = [];
    input.push(this._inputElementName);
    input.push(this._inputElementStep2);
    for (var i = 0; i < input.length; i++) {
      if (input[i].state.isClosed) {
        input[i].openCollapsible();
      } else {
        input[i].closeCollapsible();
      }
      await this.sleep(370);
    }
    //do stuff
  };

  //Get scroll position with Reactjs
  //https://stackoverflow.com/a/53158893/5493318
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
    this.doSomething();
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
