import React from 'react'
import styled from 'styled-components';
import {Block,InlineBlock,InlineFlex} from 'reakit'  
export default () => {
  return (
    
<InlineFlex justifyContent="start" height="100%" width="100%">
        <Block width="100%" height="100px" backgroundColor="rgb(219, 112, 147)" />
        <Block width="100%" height="100px" backgroundColor="rgb(219, 112, 198)" />
        <Block width="100%" height="100px" backgroundColor="rgb(205, 112, 219)" />
</InlineFlex>

   
  )
}
