import React, { Component } from 'react';

class InputWrapper extends Component {
  render() {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export default InputWrapper;