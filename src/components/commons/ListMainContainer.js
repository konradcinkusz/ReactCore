import React, { Component } from "react";
import FormErrors from './FormErrors'

class ListMainContainer extends Component {
    render() {
        return (
            <div className="listMain">
                <h2>{this.props.headerText}</h2>
                <div>
                    <FormErrors formErrors={this.state.formErrors} friendlyNames={this.state.friendlyNames} />
                </div>
                <div className="header">
                    <form role="form" onSubmit={this.addItem}>
                        {this.props.formElements}
                    </form>
                </div>
            </div>
        );
    }
}

export default ListMainContainer;