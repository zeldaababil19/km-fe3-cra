import React from 'react';

class CustomButton extends React.Component {
  render() {
    return (
      <div className="button">
        <button href={this.props.url}>{this.props.buttonName}</button>
      </div>
    );
  }
}

export default CustomButton;
