import React from 'react';
import {Card} from '../Card/Card.js';
import './CardList.css';

export const CardList = (props) => 
{
    return (
        <div className="card-list">
            
            {
                props.monsters.map((item, index) => {
                return (
                    <Card key={item.id} monster={item}></Card>
                );
            })
            }
        </div>
    );
};