import './App.css';
import data from './data';
import { useEffect } from 'react';

const REACT_APP_GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;
const REACT_APP_SPOTIFY = process.env.REACT_APP_SPOTIFY;

function App() {
  useEffect(() => {
    console.log('giphy client id');
    console.log(REACT_APP_GIPHY_KEY);
    console.log('spotify client id');
    console.log(REACT_APP_SPOTIFY);
  }, []);

  return (
    <div className="App">
      <div id="discography">
        <h1>Homework 2-1</h1>
        <h3>
          <span className="lead solid-color">Studio</span> <span>Album</span>
        </h3>
        <section>
          <div className="album-section">
            <div className="album">
              <img src="https://i.scdn.co/image/ab67616d00001e02e8b066f70c206551210d902b" className="album-img" />
              <div className="album-overlay">
                <div className="release-date">{data.album.release_date}</div>
                <div className="album-title">{data.album.album_type}</div>
              </div>
            </div>
          </div>
        </section>
        <h3>{data.artists[0].name}</h3>
        <h4>{data.album.name}</h4>
        <br />
        <button>Select</button>
      </div>
    </div>
  );
}

export default App;
