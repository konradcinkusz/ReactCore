import React, { Component } from "react";
import { FormErrors } from "./FormErrors";

class ValidatedTextField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputElement: '',
            formErrors: { inputElement: '' },
            friendlyNames: { inputElement: 'Pole ' + this.props.placeholder.toLowerCase() },
            inputElementValid: '',
            formValid: false
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        var inputElement = this._inputElement.value
        if (inputElement === "") {
            let fieldValidationErrors = this.state.formErrors;
            fieldValidationErrors.inputElement = 'nie wypełnione.';
            this.setState({
                formErrors: fieldValidationErrors,
                inputElementValid: false
            }, this.validateForm);
        } else {
            var itemToAdd = {
                inputElement: inputElement,
                key: Date.now()
            }

            this.props.addItem(itemToAdd);

            this._inputElementName.value = "";

            this.setState({
                inputElement: '',
            }, () => { this.validateField('clean', value) });
        }

        e.preventDefault();
    }

    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <FormErrors />
                </div>
                <div className="col-6">
                    <input
                        name={this.props.name}
                        className={`form-control ${this.errorFuelTypeClass(this.state.inputElementValid)}`}
                        ref={(a) => this._inputElement = a}
                        placeholder={this.props.placeholder}
                        onChange={(event) => this.handleUserInput(event)}
                        onBlur={(event) => this.blurUserInput(event)}
                    />
                </div>
            </div>
        )
    }
}

export default ValidatedTextField;