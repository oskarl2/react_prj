import React, { PureComponent } from 'react';

class Button extends PureComponent {
  render() {
    console.log(this.props.children);
    return (
      <button {...this.props}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;