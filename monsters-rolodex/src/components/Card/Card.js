import React from 'react';
import './Card.css'

export const Card = props => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`} />
        <h1>{props.monster.name}</h1>
        <h5>{props.monster.email}</h5>
    </div>
)