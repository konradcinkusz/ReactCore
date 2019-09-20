import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import { Tooltip } from './Tooltip';

/**
 * Generyczny komponent zawierający w sobie input wraz z logiką walidacyjną do wprowadzania tekstu
 *
 * Input zawiera jeden bootstrapowy wiersz
 *
 * Należy go zasilić:
 * placeholder -> podpowiedzi do inputa
 * name -> nazwa inputa (najlepiej unikalna)
 * entries -> jeżeli input dodaje coś do zbioru danych to wypełniamy entries
 * addItem -> wskaźnik do funkcji
 * inputTooltip -> Tekst do podpowiedzi w kółeczku informacyjnym po prawej stronie inputa
 * iconClassName -> Nazwa klasy ikonki do wyświetlenia po lewej stronie inputa
 */
class ValidatedInputText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputElement: '',
      formErrors: { inputElement: '' },
      friendlyNames: {
        inputElement: 'Pole ' + this.props.placeholder.toLowerCase()
      },
      inputElementValid: '',
      formValid: false
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    var inputElement = this._inputElement.value;
    if (inputElement === '') {
      let fieldValidationErrors = this.state.formErrors;
      fieldValidationErrors.inputElement = 'nie wypełnione.';
      this.setState(
        {
          formErrors: fieldValidationErrors,
          inputElementValid: false
        },
        this.validateForm
      );
    } else {
      var itemToAdd = {
        inputElement: inputElement,
        key: Date.now()
      };

      this.props.addItem(itemToAdd);

      this._inputElementName.value = '';

      this.setState(
        {
          inputElement: ''
        },
        () => {
          this.validateField('clean', value);
        }
      );
    }

    e.preventDefault();
  }

  // #region Funkcje walidacyjne
  blurUserInput(e) {
    if (e.target.value.length > 0) {
      return;
    }
    const name = e.target.name;
    const value = '';
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let inputElementValid = this.state.inputElementValid;

    switch (fieldName) {
      case this.props.name:
        var str = new String(value);
        inputElementValid = str.length > 3;
        var isempty = str.length === 0;
        if (isempty) {
          inputElementValid = '';
          fieldValidationErrors.inputElement = '';
          break;
        }
        fieldValidationErrors.inputElement = inputElementValid
          ? ''
          : 'jest za krótkie (przynajmniej 3 znaki)!';
        //Ciekawe co się stanie, jak się nie poda nic w ogóle
        if (
          this.props.entries.filter(
            data => data.names.toLowerCase() === value.toLowerCase()
          ).length > 0
        ) {
          inputElementValid = false;
          fieldValidationErrors.inputElement =
            'zawiera element, który już został dodany, wprowadź inna nazwę.';
        }
        break;
      case 'clean':
        inputElementValid = '';
        fieldValidationErrors.inputElement = '';
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        inputElementValid: inputElementValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({ formValid: this.state.inputElementValid });
  }

  errorFuelTypeClass(error) {
    if (typeof error === 'string' || typeof error === 'undefined') {
      return '';
    }
    return error ? 'is-valid' : 'is-invalid'; //Bootstrap v4
  }
  // #endregion

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <i className={this.props.iconClassName} />
        </div>
        <div className="col-5">
          <FormErrors />
        </div>
        <div className="col-5">
          <input
            name={this.props.name}
            className={`form-control ${this.errorFuelTypeClass(
              this.state.inputElementValid
            )}`}
            ref={a => (this._inputElement = a)}
            placeholder={this.props.placeholder}
            onChange={event => this.handleUserInput(event)}
            onBlur={event => this.blurUserInput(event)}
          />
        </div>
        <Tooltip
          id={`${this.props.name}Tooltip`}
          text={this.props.inputTooltip}
        />
      </div>
    );
  }
}

export default ValidatedInputText;
