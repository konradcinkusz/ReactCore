import React, { Component } from 'react';
import CirclesItemsVertical from '../commons/CirclesItemsVertical';
import Collapsible from 'react-collapsible';
import './CirclesItemsVerticalExample.css';
import CirclesItemsCounterExample from './CirclesItemsCounterExample';

class CirclesItemsVerticalExample extends Component {
  constructor(props) {
    super(props);
    this.ClickItem = this.ClickItem.bind(this);

    function makeAdditionalOptions(item) {
      let title = item.title;
      let subTitle = item.subTitle;
      let collabseRef = item.collabseRef;
      let listItems = item.listItems;

      return (
        <div>
          {title}
          <br />
          <small>
            <i>{subTitle}</i>
          </small>
          <Collapsible ref={collabseRef.func}>
            <div className="collapsible">
              <div className="row">{listItems}</div>
            </div>
          </Collapsible>
        </div>
      );
    }

    function makeButton(item) {
      let onClick = item.onClick;
      let refFunc = item.refFunc;
      let icon = item.icon;
      return (
        <button className="buttons" onClick={onClick.click} ref={refFunc.func}>
          {icon}
        </button>
      );
    }

    function makeCol(item) {
      let title = item.title;
      let description = item.description;
      let image = item.image;

      return (
        <div className="col-6 col-sm-6 col-lg-4">
          <h3>{title}</h3>
          <p>
            <center>
              <img src={image.img} />
            </center>
          </p>
          <p>{description}</p>
        </div>
      );
    }
    function madeMockRecord(item) {
      let key = item.key;
      let icon = item.icon;
      let additionalOptions = item.additionalOptions;

      return {
        key: key,
        icon: icon.func,
        additionalOptions: additionalOptions.func
      };
    }
    this.state = {
      entries: [
        madeMockRecord({
          key: 111,
          icon: {
            func: makeButton({
              onClick: { click: () => this.ClickItem(111) },
              refFunc: { func: a => (this._buttonEducationStep = a) },
              icon: <i className="fas fa-graduation-cap" />
            })
          },
          additionalOptions: {
            func: makeAdditionalOptions({
              title: 'Education',
              subTitle: 'My key education points',
              collabseRef: {
                func: a => (this._collapsibleEducationStep = a)
              },
              listItems: [
                makeCol({
                  title: 'Secondary Education',
                  image: { img: require('./patron.jpg') },
                  description:
                    'I graduated secondary school in maths and physics specialization.'
                }),
                makeCol({
                  title: 'Higher Education',
                  image: { img: require('./logotype_polibuda.jpg') },
                  description:
                    'Technical University of Lodz, Diploma in Computer Science'
                }),
                makeCol({
                  title: 'Specialization',
                  image: { img: require('./logo_weeia.png') },
                  description:
                    'Department of electronics; Institute of Applied Computer Science; Computer Science;'
                })
              ]
            })
          }
        }),
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
          icon: makeButton({
            onClick: { click: () => this.ClickItem(333) },
            refFunc: { func: a => (this._buttonProSkillStep = a) },
            icon: <i className="fas fa-globe-americas" />
          }),
          additionalOptions: (
            <div>
              Professional skills
              <br />
              <small>
                <i>My professional skills</i>
              </small>
              <Collapsible ref={a => (this._collapsibleProSkillStep = a)}>
                <div className="collapsible">
                  <div className="row">
                    {makeCol({
                      title: 'Language',
                      image: { img: require('./skills/csharp.jpg') },
                      description:
                        'My main languages which I used through my programmer career.'
                    })}
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
                        libraries from 3.5 version but I have been a member of
                        two project written in 2 version.
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
                    <div className="col-6 col-sm-6 col-lg-4">
                      <h3>Technology</h3>
                      <p>
                        <center>
                          <img src={require('./skills/netMVC.jpg')} />
                        </center>
                      </p>
                      <p>
                        One of my lieblings technology is ASP.NET MVC 5 - I
                        think it is the best!
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
                        Which programmer who are creating machine learning
                        project doesn't use sklearn library?
                      </p>
                    </div>
                  </div>
                </div>
              </Collapsible>
            </div>
          )
        },
        madeMockRecord({
          key: 444,
          icon: {
            func: makeButton({
              onClick: { click: () => this.ClickItem(444) },
              refFunc: { func: a => (this._buttonToolsStep = a) },
              icon: <i className="fas fa-republican" />
            })
          },
          additionalOptions: {
            func: makeAdditionalOptions({
              title: 'Used programming tools',
              subTitle:
                'This is the tools which I used during my programming career',
              collabseRef: { func: a => (this._collapsibleToolsStep = a) },
              listItems: [
                makeCol({
                  title: 'Visual Studio 2019 Pro',
                  image: { img: require('./Tools/vs2019.png') },
                  description: 'This is my main tool'
                }),
                makeCol({
                  title: 'Microsoft TFS',
                  image: { img: require('./Tools/tfs.png') },
                  description:
                    'Used as version control system and project management tool.'
                }),
                makeCol({
                  title: 'Microsoft IIS',
                  image: { img: require('./Tools/MicrosofIIS.png') },
                  description:
                    'For web management and deployment I always use Microsoft IIS.'
                }),
                makeCol({
                  title: 'Microsoft SSMS',
                  image: { img: require('./Tools/ssms.png') },
                  description:
                    'For database quering and management I used SQL Server Management Studio but lastly I try to change to SSMS whithin Visual Studio 2019'
                }),
                makeCol({
                  title: 'Version control systems',
                  image: {
                    img: require('./Tools/control_version_systems.jpg')
                  },
                  description:
                    'I used GIT as code repository management system and I use github, gitlab and bitbucket as repository server'
                }),
                makeCol({
                  title: 'Atlassian stack',
                  image: { img: require('./Tools/attlasian.jpg') },
                  description:
                    'I have an experience with most of atlassian stack tool. Eg. bamboo CI, Jira management and bitbuicket source control'
                }),
                makeCol({
                  title: 'Atlassian stack',
                  image: { img: require('./Tools/Bamboo.png') },
                  description: 'In CI working I used only bamboo'
                })
              ]
            })
          }
        }),
        madeMockRecord({
          key: 666,
          icon: {
            func: makeButton({
              onClick: { click: () => this.ClickItem(666) },
              refFunc: { func: a => (this._buttonAcademicSkillsStep = a) },
              icon: <i className="fas fa-car" />
            })
          },
          additionalOptions: {
            func: makeAdditionalOptions({
              title: 'Academic skills',
              subTitle:
                'During my education I improve many skills which unfortunately I do not used now in professional. Moreover I try to develop this skills in my free time',
              collabseRef: {
                func: a => (this._collapsibleAcademicSkillsStep = a)
              },
              listItems: [
                makeCol({
                  title: 'Technology',
                  image: { img: require('./academicSkills/arduino.png') },
                  description:
                    'This is my home hobby I try to make my own auto plants system.'
                }),
                makeCol({
                  title: 'Language',
                  image: { img: require('./academicSkills/Clanguage.png') },
                  description:
                    'Its base language during my study I used it once in professional when I was developing program to detect wrap perspective of an images'
                }),
                makeCol({
                  title: 'Language',
                  image: { img: require('./academicSkills/golang.png') },
                  description:
                    'This is future of fast web development enviroment. I try to learn syntax and made simply programs.'
                }),
                makeCol({
                  title: 'Language',
                  image: { img: require('./academicSkills/prolog.png') },
                  description:
                    'Its connected with machine learning. When I must create knowledge base I always think about using Prolog.'
                }),
                makeCol({
                  title: 'Technology',
                  image: { img: require('./academicSkills/cuda.jpg') },
                  description: 'I write my thesis about CUDA computing.'
                })
              ]
            })
          }
        }),
        madeMockRecord({
          key: 555,
          icon: {
            func: makeButton({
              onClick: { click: () => this.ClickItem(555) },
              refFunc: { func: a => (this._buttonOtherToolsStep = a) },
              icon: <i className="fas fa-calendar-alt" />
            })
          },
          additionalOptions: {
            func: makeAdditionalOptions({
              title: 'Other used tools',
              subTitle: 'This is the computer tools which I used in general',
              collabseRef: { func: a => (this._collapsibleOtherToolsStep = a) },
              listItems: [
                makeCol({
                  title: 'Eclipse',
                  image: { img: require('./otherTools/eclipseLogo.png') },
                  description:
                    'During my education I used eclipse to developed training Java SE application. I was collecting knowledge about design pattern when I used Java SE.'
                }),
                makeCol({
                  title: 'Oracle JDeveloper',
                  image: { img: require('./otherTools/jDeveloperLogo.png') },
                  description:
                    'When I was in Oracle on internship I used JDevelper tool to developed simple app with Mobile Application Framework.'
                }),
                makeCol({
                  title: 'Matlab',
                  image: { img: require('./otherTools/matlab.jpg') },
                  description:
                    'During my study I was helping to developed my mathemathic skills by myself.'
                }),
                makeCol({
                  title: 'Autodesk Inventor',
                  image: { img: require('./otherTools/inventor.jpg') },
                  description:
                    'I was projecting furniture for my home. Additionaly I have an advance certificate in inventor.'
                })
              ]
            })
          }
        }),
        madeMockRecord({
          key: 777,
          icon: {
            func: makeButton({
              onClick: { click: a => a },
              refFunc: { func: a => a },
              icon: <i className="far fa-comments" />
            })
          },
          additionalOptions: {
            func: makeAdditionalOptions({
              title: 'Thanks for your time',
              subTitle: 'spending on my site. Conntac me if you wish!',
              collabseRef: { func: a => a },
              listItems: []
            })
          }
        })
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
    input.push({
      btn: this._buttonToolsStep,
      value: this._collapsibleToolsStep
    });
    input.push({
      btn: this._buttonAcademicSkillsStep,
      value: this._collapsibleAcademicSkillsStep
    });
    input.push({
      btn: this._buttonOtherToolsStep,
      value: this._collapsibleOtherToolsStep
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
      case 444:
        input = this._collapsibleToolsStep;
        break;
      case 555:
        input = this._collapsibleOtherToolsStep;
        break;
      case 666:
        input = this._collapsibleAcademicSkillsStep;
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
