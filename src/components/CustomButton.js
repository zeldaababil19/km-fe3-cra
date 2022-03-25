import React from 'react';
import Button from '@material-ui/core/Button';

class CustomButton extends React.Component {
  render() {
    return (
      <div className="button">
        {/* <a href={this.props.buttonLink} target="_blank">
          <Button> Link Button </Button>
        </a> */}
        <Button variant="contained" color="primary" href={this.props.url}>
          {this.props.buttonName}
        </Button>
      </div>
    );
  }
}

export default CustomButton;
