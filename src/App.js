import React ,{useState, useEffect}from 'react';
import styled from 'styled-components';
import { Provider,Grid } from "reakit";
import theme from "reakit-theme-default";
import useAxios from '@use-hooks/axios';
import axios from 'axios';
import moment from 'moment';
import Category from './Components/Category'
import Player from './Components/Player'
import Team from './Components/Team'
import Active from './Components/Active'
import Games from './Components/Games'
import Video from './Components/Video'
import  DayCard from './Components/DayCard';
const template = `
  "a b b" 100px
  "a b b" minmax(200px, 1fr)
  "a b b" 100px / 150px
`;
const StyledGrid=styled(Grid)`
     width:85%;
     height:400px;
     margin:10px auto;
     border-radius:10px;
     box-shadow:2px 3px 4px  gray;


`

const SideBar=styled(Grid.Item)``;
const Content=styled(Grid.Item)``;

   

const App=()=>{
  const today=moment().format("YYYYMMDD");
  const [tab,setTab]=useState("Games");
  //const [data,setData]=useState();


  const [day, setDay] = useState(today);

  const [gamecount, setGameCount]=useState(0);
  const {
    response,
    loading,
    error,
    query,
  } = useAxios({
    url: `http://data.nba.net/10s/prod/v1/${day}/scoreboard.json`,
    method: 'GET',
    options: {
      params: { day },
    },
    trigger: day
  });

  const { data } = response || {};
  //console.log(data);
  //console.log(data.numGames);
  //setGameCount(data.numGames);

  
  
  return (
    <Provider theme={theme}>
    <StyledGrid template={template}>
        <SideBar area="a" backgroundColor="rgba(39, 47, 63, 1.000)">
           <Category setTab={setTab} activedTab={tab}></Category>
           <DayCard times={today} gamecount={0}/>
        </SideBar>
        <Content area="b" backgroundColor="rgba(255, 255, 255, 1.000)">
            { tab==='Games'&&<Games/>}
            { tab==='Player'&&<Player/>}
            { tab==='Team'&&<Team/>}
            { tab==='Active'&&<Active/>}

            {/* {renderSelectedTab()} */}
         </Content>
    </StyledGrid>
    </Provider>
  )
}

export default App;


//NOTE  暂留代码
//   const renderSelectedTab=()=>{
//     switch (tab) {
//      case 'Games':
//        return <Games/>
//      case 'Player':
//        return <Player/>
//      case  'Team':
//        return <Team/>
//      case  'Active':
//        return <Active/>
//       default :
//         return <Video/>
//    }
   
//  }