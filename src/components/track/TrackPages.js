import React from 'react';
import Track from './Track';
import data from '../../data/Datas';

export default function TrackPages() {
  const trackList = data.map((data, id) => (
    <Track key={id} id={id} imageLength={data.album.images.length} image={data.album.images[0].url} name={data.name} artist={data.album.artists[0].name} album={data.album.name} buttonTitle="Select" url={data.external_urls.spotify} />
  ));

  return <div className="tracklist">{trackList}</div>;
}
