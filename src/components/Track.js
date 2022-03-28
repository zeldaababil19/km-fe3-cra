import CustomButton from './CustomButton';

export default function Track({ name, artist, album, url, printId, buttonTitle }) {
  return (
    <div id="track">
      <div id="name">{name}</div>
      <div id="artist">By {artist}</div>
      <div id="album">{album}</div>
      <br />
      <button url={url} onClick={printId}>
        {buttonTitle}
      </button>
    </div>
  );
}
