import React from 'react';
import styled from 'styled-components';

const ButtonName = styled.button`
    width: 120px;
    height: 40px;
    background-color: darkblue;
    color: white;
    border:1px solid lightblue;
    border-radius: 5px;
`;

const Button = props => {

    return (
        <ButtonName onClick={props.click} disabled={props.disabled}>{props.name}</ButtonName>
    )
}

export default Button;