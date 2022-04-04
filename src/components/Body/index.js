import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrackPages from '../track/TrackPages';
import Track from '../track/Track';

export default function Body() {
  // Configuration
  const CLIENT_ID = '35f40d641fa34a4f9e745f9c3b14f5fa'; //your client id
  const REDIRECT_URI = 'http://localhost:3000/'; //your base uri
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'; // your auth end point
  const RESPONSE_TYPE = 'token'; // your respon type as token

  const [token, setToken] = useState(''); // your state variable for the token and set to an empty string
  const [searchKey, setSearchKey] = useState(); //your state variable for searchkey
  const [tracks, setTracks] = useState([]); //your state variable for tracks
  const [submitted, setIsSubmitted] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [btnText, setBtnText] = useState('select');

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];

      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }

    setToken(token);
  }, []);

  // to clear the token from local storage
  const logout = () => {
    setToken('');
    window.localStorage.removeItem('token');
  };

  const getTrack = () => setIsSubmitted(true);
  const closeTrack = () => setIsSubmitted(false);

  const getSearchModal = () => setSearchModal(true);
  const closeSearchModal = () => setSearchModal(false);

  const changeBtntext = (id, text) => setBtnText(id, text);

  // search the track from spotify api
  const searchTracks = async (e) => {
    // prevent the form before submiting itself
    e.preventDefault();
    const { data } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: 'track',
      },
    });

    setTracks(data.tracks.items);
  };

  const renderTracks = () => {
    return tracks.map((track) => {
      return (
        <Track
          key={track.id}
          id={track.id}
          imageLength={track.album.images.length}
          image={track.album.images[0].url}
          name={track.name}
          artist={track.album.artists[0].name}
          album={track.album.name}
          useButton={true}
          onClick={() => changeBtntext('selected')}
          buttonTitle={btnText}
          url={track.external_urls.spotify}
        >
          <button onClick={() => changeBtntext('selected')}>{btnText}</button>
        </Track>
      );
    });
  };

  return (
    <div className="body">
      <h1>this is a Homework 3-2</h1>
      {!token ? (
        <a className="button" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
          Please Login
        </a>
      ) : (
        <div>
          <button onClick={logout}>Logout</button>
          <br />
          <br />
        </div>
      )}

      {token ? (
        <div className="search">
          <form onSubmit={searchTracks}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} required />
            <button type={'submit'} onClick={getSearchModal}>
              Search
            </button>
          </form>
          <button type={'submit'} onClick={closeSearchModal}>
            Close
          </button>
        </div>
      ) : (
        <h2> You didn't authorize </h2>
      )}
      <br />
      <br />
      {/* <button onClick={getTrack}>Get Track</button>
      <button onClick={closeTrack}>Close Track</button>
      {submitted ? <TrackPages /> : null} */}

      {searchModal ? renderTracks() : null}
    </div>
  );
}
