import React, { Component } from 'react';
import ValidatedInputText from '../commons/ValidatedInputText';

class ValidateInputTextExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: ['ExampleText']
    };
  }

  render() {
    return (
      <ValidatedInputText
        placeholder="Example placeholder"
        name="Example"
        entries={this.state.entries}
        inputTooltip="Example tooltip"
        iconClassName="far fa-grin"
      />
    );
  }
}

export default ValidateInputTextExample;
