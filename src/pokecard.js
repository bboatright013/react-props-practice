import React from 'react';
import './pokecard.css';


const Pokecard = (props) => {
    let imgAddress = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;

    return (

        <div className="Pokecard">
            <span className="Pokecard-name">{props.name}</span>
            <img alt="" className="Pokecard-image" src={imgAddress} />
            <span className="Pokecard-type">Type: {props.type}</span>
            <span className="Pokecard-exp">EXP: {props.base_experience}</span>


        </div>
    )
}

export default Pokecard;