import React from 'react'
import {Card,Image} from 'reakit';
import styled from 'styled-components';

const StyledCard=styled(Card)`
    margin-left:30px;
    color:white;
    font-size:14px;
    
`

export default (props) => {
  return (
<StyledCard>
  
     <Card.Fit
    as={Image}
    src="https://placekitten.com/30/30"
    alt="Kitten"
    width={30}
/>
  <div style={{textAlign:'center'}}>{props.times}</div>
  <div>Game:{props.gamecount}</div>
</StyledCard>
  )
}
