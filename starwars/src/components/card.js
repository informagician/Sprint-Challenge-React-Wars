import React from 'react';

const Card = props => {
    
    return(
    <div className="card">
        <h2>Name: {props.name}</h2>
        <h3>Hight: {props.height}</h3>
        {/* <h3>Hair Color: {props.hair_color}</h3>
        <h3>Birth year: {props.birth_year}</h3> */}
    </div>
    )
}

export default Card;