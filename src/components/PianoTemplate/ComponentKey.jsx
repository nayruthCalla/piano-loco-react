import React from 'react';
import styled,{css} from 'styled-components';

const PianoKey = styled.a`

`;
const PathKey = styled('path')(
  ({flag}) => css`
  
  fill : ${flag ? 'white':'black'};
  &:hover {
    fill : ${flag ? '#ffd200':'#f40082'};
  }`
);
const Text = styled.text`
  fill: #746d6d9d;
  stroke-width :2px;
  stroke: #6161686e;
`;

const ComponentKey = ({coordints, flag, audio, text}) => {

  const newAudio = new Audio(audio);
  const handleOnStart = () => {
    newAudio.play();
  }
 
  return (
    <PianoKey href="#">
    <PathKey  d={coordints} onClick = {handleOnStart} flag = {flag} />
    <Text x= {text.x} y={text.y} >{text.t}</Text>    
  </PianoKey>
  )
}

export default ComponentKey
