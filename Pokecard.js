import React from 'react';

function Pokecard(props) {
  let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
  return (
    <div className="pokecard">
      <h1>{props.name}</h1>
      <img src={imgSrc} alt={props.name} />
      <p>Type: {props.type}</p>
      <p>EXP: {props.base_experience}</p>
    </div>
  );
}

export default Pokecard;
