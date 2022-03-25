import React from 'react';

class Album extends React.Component {
  render() {
    return (
      <section>
        <div className="album-section">
          <div className="album">
            <img src={this.props.image} className="album-img" />
            <div className="album-overlay">
              <div className="release-date">{this.props.rilisDate}</div>
              <div className="album-title">{this.props.albumType}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Album;
