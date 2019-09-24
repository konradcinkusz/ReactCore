import React, { Component } from 'react';
import ValidatedInputText from '../commons/ValidatedInputText';
import ValidatedTextInput from '../commons/ValidatedTextInput';
import './ContainerExample.css';

class ContainerExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: ['ExampleText'],
      options: ['dom', 'wakacje', 'praca', 'inne', 'Cactus']
    };
  }

  render() {
    return (
      <div className="containerExample">
        <div className="header">
          <h2>Example Header</h2>
        </div>
        <div className="row">
          <div className="col-6">
            <ValidatedInputText
              placeholder="Example placeholder"
              name="testExample"
              entries={this.state.entries}
              inputTooltip="Example tooltip"
              iconClassName="far fa-grin"
            />
          </div>
          <div className="col-6">
            <ValidatedInputText
              placeholder="Example placeholder"
              name="testExample"
              entries={this.state.entries}
              inputTooltip="Example tooltip"
              iconClassName="far fa-grin"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <ValidatedInputText
              placeholder="Example placeholder"
              name="testExample"
              entries={this.state.entries}
              inputTooltip="Example tooltip"
              iconClassName="far fa-grin"
            />
          </div>
          <div className="col-6">
            <ValidatedTextInput
              placeholder="Example placeholder"
              name="Example"
              entries={this.state.entries}
              inputTooltip="Example tooltip"
              iconClassName="far fa-grin"
              options={this.state.options}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerExample;
