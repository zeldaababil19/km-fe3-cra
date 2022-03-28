import Track from './../Track.js';
import trackData from './../../trackData.js';

export default function Home() {
  const printId = (id) => {
    console.log('select id: ', id);
  };
  return (
    <div className="Home">
      {trackData.map((track) => (
        <Track key={track.id} name={track.name} artist={track.artists[0].name} album={track.album.name} buttonTitle="Go To Spotify" uri={track.external_urls.spotify} printId={() => printId(track.id)} />
      ))}
    </div>
  );
}
