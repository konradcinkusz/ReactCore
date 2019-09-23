import React, { Component } from 'react';
import ValidatedTextInput from '../commons/ValidatedTextInput';

class ValidateTextInputExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: ['ExampleText'],
      options: ['dom', 'wakacje', 'praca', 'inne', 'Cactus']
      // lub trochę bardziej zaawansowane zbindowanie:
      // options: [
      //   //this.props.fuelItems.fuels.map(function (item) { return item.fuelType }),
      //   this.props.cars.map(function(item) {
      //     return item.carType;
      //   })
      // ].flat()
    };
  }

  render() {
    return (
      <ValidatedTextInput
        placeholder="Example placeholder"
        name="Example"
        entries={this.state.entries}
        inputTooltip="Example tooltip"
        iconClassName="far fa-grin"
        options={this.state.options}
      />
    );
  }
}

export default ValidateTextInputExample;
