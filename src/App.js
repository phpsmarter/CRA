import React, { Component } from 'react';
import {Button} from 'reactstrap';
import styled from 'styled-components';

const Container=styled.div`
  background:palegreen;
 height:100vh
 `;
const TodoList=styled.div`
  max-width:400px;
  background:rgba(51, 153, 238, 0.8);
  padding:5px;
  border-radius:5px;
  margin: auto;
  box-shadow:2px 2px 2px rgba(177, 224, 212, 10.2)
`
const Todo=({todo})=>(
     <div style={{alignItems:"space-around"}}>
             <span key={todo.id}>{todo.text} 
             </span>
               <div  style={{display:'inline-block'}}>
                    <Button  color="primary"style={{padding:'1px'}}>press</Button>
                    <Button  color="success" style={{padding:'1px'}}>X</Button>
               </div>
     </div>
)

const StyledTodo=styled(Todo)`
  background: #fff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  padding: 3px 10px;
  font-size: 12px;
  margin-bottom: 6px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`


class App extends Component {
  state={todos:[
    {id:1,text:"123"},
    {id:2,text:"123"},
    {id:3,text:"123"},
    {id:3,text:"123"},

  ]}
  render() {
    return (
      <Container>
          <TodoList>
            {this.state.todos.map((todo,index)=>
               <StyledTodo key={index} todo={todo}/>
            )}
          </TodoList>
      </Container>
    );
  }
}

export default App;
