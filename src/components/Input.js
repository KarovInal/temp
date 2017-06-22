import React, { Component } from 'react'

class Input extends Component {
    onClick() {
        var clickButton = this.props.clickButton;
        clickButton(this.refs['input'].value);
    }
    render() {
        return (
            <div className="input-block">
                <input 
                    className="input"
                    defaultValue=""
                    ref="input"
                    placeholder="Введите город" />
                <button
                    className="button"
                    onClick={this.onClick.bind(this)}>
                    Искать
                </button>
            </div>
        )
    }
}

export default Input;