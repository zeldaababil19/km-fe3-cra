import './App.css';
import data from './data';
import { useEffect } from 'react';
import Title from './components/Title';
import Album from './components/Album';
import Song from './components/Song';
import Button from './components/CustomButton';

const REACT_APP_GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;
const REACT_APP_SPOTIFY = process.env.REACT_APP_SPOTIFY;

function App() {
  useEffect(() => {
    console.log('giphy client id');
    console.log(REACT_APP_GIPHY_KEY);
    console.log('spotify client id');
    console.log(REACT_APP_SPOTIFY);
  }, []);
  const title = {
    titlename: 'Homework 2-2',
    studio: 'Queen',
    album: 'Studio',
  };

  const button = {
    buttonname: 'Go to Spotify',
  };
  const image = {
    imagedata: 'https://i.scdn.co/image/ab67616d00001e02e8b066f70c206551210d902b',
  };
  return (
    <div className="App">
      <div id="discography">
        <Title title={title.titlename} studio={title.studio} album={title.album} />
        <Album image={image.imagedata} rilisDate={data.album.release_date} albumType={data.album.name} />
        <Song artist={data.artists[0].name} songTitle={data.album.name} songRelease={data.album.release_date} />
        <Button buttonName={button.buttonname} url={data.external_urls.spotify} />
      </div>
    </div>
  );
}

export default App;
