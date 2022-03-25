import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <div className="title">
        <h1>{this.props.title}</h1>;
        <h3>
          <span className="lead solid-color">{this.props.studio}</span> <span>{this.props.album}</span>
        </h3>
      </div>
    );
  }
}

export default Title;
