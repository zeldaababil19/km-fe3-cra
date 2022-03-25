import React from 'react';

class Song extends React.Component {
  render() {
    return (
      <section>
        <div className="song-section">
          <h2 className="artist">{this.props.artist}</h2>
          <h3 className="song-title">{this.props.songTitle}</h3>
          <h3 className="song-release">{this.props.songRelease}</h3>
        </div>
      </section>
    );
  }
}

export default Song;
