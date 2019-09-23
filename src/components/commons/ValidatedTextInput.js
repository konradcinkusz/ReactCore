import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import { Tooltip } from './Tooltip';
import TextInput from 'react-autocomplete-input';
import './Commons.css';

/**
 * Generyczny komponent zawierający w sobie input wraz z logiką walidacyjną do wprowadzania tekstu
 *
 * Input zawiera jeden bootstrapowy wiersz
 *
 * Należy go zasilić:
 * placeholder -> podpowiedzi do inputa
 * name -> nazwa inputa (najlepiej unikalna)
 * entries -> jeżeli input dodaje coś do zbioru danych to wypełniamy entries
 * inputTooltip -> Tekst do podpowiedzi w kółeczku informacyjnym po prawej stronie inputa
 * iconClassName -> Nazwa klasy ikonki do wyświetlenia po lewej stronie inputa
 * options -> opcje, które ma podpowiadać
 *
 */
class ValidateTextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputElement: '',
      formErrors: { inputElement: '' },
      friendlyNames: {
        inputElement: 'Pole ' + this.props.placeholder.toLowerCase()
      },
      inputElementValid: '',
      formValid: false,
      options: this.props.options,
      // ["dom", "wakacje", "praca", "inne", "Cactus"], //To trzeba ściągnąć z reduktora
      value: '',
      enteredOptions: []
    };
  }

  // #region Funkcje walidacyjne
  handleAutosuggestTextInput(textValue) {
    //W tej metodzie, za każdym wpisaniem tekstu sprawdzamy jego wartość

    var enteredOptions = this.state.enteredOptions;

    //https://stackoverflow.com/a/4009768/5493318
    //var count = (textValue.match(/@/g) || []).length; //tutaj tego nie stosujemy, bo niekoniecznie w tym miejscu textValue jest stringiem
    var isText = typeof textValue === 'string';
    var friendlyTextValue = this.state.friendlyText;
    if (
      isText &&
      (textValue.match(/@/g) || []).length >= enteredOptions.length
    ) {
      //To znaczy że łykamy proxy
      var textValueSplited = textValue
        .split(' ')
        .map(function(item) {
          return item.split('@');
        })
        .flat();
      var options = this.state.options;
      enteredOptions = [];
      friendlyTextValue = textValue;
      //W tym miejscu uzupełniamy, które indeksy zostały wybrane, i zapisujemy je do state'a
      textValueSplited.forEach(function(r) {
        if (options.indexOf(r) >= 0) {
          var opt = options.indexOf(r);
          enteredOptions.push(opt);

          friendlyTextValue = friendlyTextValue.replace('@' + r, '');
        }
      });
      //Tutaj powinna być funkcja try to fill empty fields (typ samochodu itp.)
    } else {
      //to jest w wypadku wywołania funkcji onBlur
      textValue = this._inputElement.recentValue;
      friendlyTextValue = '';
    }

    friendlyTextValue = friendlyTextValue.replace(/[0-9]|km/g, '');

    this.setState(
      {
        value: textValue,
        enteredOptions: enteredOptions,
        friendlyText: friendlyTextValue
      },
      () => {
        this.validateField(this.props.name, textValue);
      }
    );
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
          fieldValidationErrors.routeName = '';
          break;
        }
        fieldValidationErrors.routeName = inputElementValid
          ? ''
          : 'jest za krótkie (przynajmniej 3 znaki)!';
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

  errorTypeClass(error) {
    if (typeof error === 'string' || typeof error === 'undefined') {
      return '';
    }
    return error ? 'is-valid' : 'is-invalid'; //Bootstrap v4
  }
  // #endregion

  render() {
    return (
      <div className="container">
        <div className="row">
          <FormErrors
            formErrors={this.state.formErrors}
            friendlyNames={this.state.friendlyNames}
          />
        </div>
        <div className="row">
          <div className="col-1">
            <div className="center">
              <i className={this.props.iconClassName} />
            </div>
          </div>
          <div className="col-10">
            <TextInput
              name={this.props.name}
              className={`form-control ${this.errorTypeClass(
                this.state.inputElementValid
              )}`}
              ref={a => (this._inputElement = a)}
              placeholder={this.props.placeholder}
              onChange={event => this.handleAutosuggestTextInput(event)}
              onBlur={event => this.handleAutosuggestTextInput(event)}
              options={this.state.options}
              value={`${this.state.value}`}
            />
          </div>
          <Tooltip
            id={`${this.props.name}Tooltip`}
            text={this.props.inputTooltip}
          />
        </div>
      </div>
    );
  }
}

export default ValidateTextInput;
