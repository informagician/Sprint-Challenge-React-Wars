import React from 'react';
import styled from "styled-components";

const CharCard = styled.div`
    width: 23%;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 5px;
`

const Card = props => {
    
    return(
    <CharCard>
        <h2>Name: {props.name}</h2>
        <h3>Hight: {props.height}</h3>
        {/* <h3>Hair Color: {props.hair_color}</h3>
        <h3>Birth year: {props.birth_year}</h3> */}
    </CharCard>
    )
}

export default Card;