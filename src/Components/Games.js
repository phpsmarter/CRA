import React from 'react'
import styled from 'styled-components';
import {Block,InlineBlock,InlineFlex, Box} from 'reakit';
import GameCard from './GameCard';





export default () => {
  return (
  <Box style={{overflow:'auto', height:'100%',marginTop:'5px'}}>
    <ul style={{listStyle:'none'}}>
      <li><GameCard/></li>
      <li><GameCard/></li>
      <li><GameCard/></li>
      <li><GameCard/></li>
      <li><GameCard/></li>
      
     
    </ul>
   </Box>
  )
}
