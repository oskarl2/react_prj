import React, { Component } from 'react';

class FormInner extends Component {
  render() {
    return (
      <form {...this.props}>
        {this.props.children}
      </form>
    );
  }
}

export default FormInner;