import React from 'react';
import styled from 'styled-components';
//import './Person.css';
const person = (props) => {
    const style = {
        '@media (min-width:500px)':{
            width: '450px'
        }
    };
     const StyledDiv = styled.div`
     Width: 60%;
     margin:auto;
     border: 1px solid #eee ;
     box-shadow: 0 2px 3px #ccc;
     padding: 16px;
     text-align:center;
 
     @media(min-width:500px){
         width:450px;
     }
     `;
return (
   // <div className="Person">
    <StyledDiv>

        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
        <p>{props.children}</p>
        <input type = "text" onChange={props.changed}/>
        </StyledDiv>
)
};

export default person;