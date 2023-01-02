// Write your Character component here
import React from "react";
import styled from "styled-components";

export const CharDiv = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 background-color: white;
 margin: 20px;
 padding: 20px;
 border-radius: 20px
`
export default function Character(props){
    const {charData} = props
    return <CharDiv className="character">
        <h2>{charData.name}</h2>
        <p>{charData.birth_year}</p>
    </CharDiv>
}