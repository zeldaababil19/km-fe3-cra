import React from 'react';

export default function Track(props) {
  return (
    <div className="track">
      {props.imageLength ? <img src={props.image} className="img" alt={props.name} /> : <div> No Image</div>}
      <h2 className="name">{props.name}</h2>
      <h4 className="artist">{props.artist}</h4>
      <p className="album">{props.album}</p>
      <br />
      {props.useButton === true ? (
        <button url={props.url} id="printId" onClick={props.onClick}>
          {props.buttonTitle}
        </button>
      ) : (
        ''
      )}
    </div>
  );
}
