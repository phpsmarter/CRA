import React from 'react'
import {List,Button} from "reakit";
import styled from 'styled-components';

const StyledLi=styled(Button)`
   display:inline-block;
   height:40px;
   padding:10px;
   border:1px solid palegoldenrod;
   margin:10px auto;
   width:130px;
   text-align:center;
   font-weight:bold; 
   border-radius:4px;
   &:hover {
    background:rgba(58, 70, 93, 1.000); 
  }
   
`

const StyledList=styled(List)`
    color:rgba(255, 255, 255, 1.000);
    list-style:none;
    margin:10px;
`
const   Category= (props) => {
const activedTab=props.activedTab;
//console.log(typeof(activedTab));
  return (
    <StyledList>
     <StyledLi   onClick={(e)=>{props.setTab("Games")
                               
    
    }} style={{backgroundColor:activedTab==='Games'?'rgba(255, 165, 0, 1.000)':null}}>Games</StyledLi>
     <StyledLi  onClick={(e)=>props.setTab("Player")} style={{backgroundColor:activedTab==='Player'?'rgba(255, 165, 0, 1.000)':null}}>Player</StyledLi>
     <StyledLi onClick={(e)=>props.setTab("Team")} style={{backgroundColor:activedTab==='Team'?'rgba(255, 165, 0, 1.000)':null}}>Team</StyledLi>
     <StyledLi onClick={(e)=>props.setTab("Active")} style={{backgroundColor:activedTab==='Active'?'rgba(255, 165, 0, 1.000)':null}}>Active</StyledLi>
    </StyledList>
  )
}

export  default Category;