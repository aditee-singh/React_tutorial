import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';


const StyledButton = styled.button`     
background-color: ${props => props.alt ? 'red' : 'green'};
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;

&:hover {
  background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
  color: black;
}
`;

class App extends Component{
  state = {
    persons : [
      {id:'ghftf',name: "Aditee", age: 19},
      {id:'hgtyf',name: "Isha", age: 22},
      {id:'hjgtf',name: "Someone", age: 23}
    ],
    otherState: 'some other value',
    showpersons : false
    }
    deletePersonHandler = (personIndex) => {
      const persons = this.state.persons.slice();
      persons.splice(personIndex,1)
      this.setState({persons:persons})
    }
  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    this.setState({persons:persons})
    persons[personIndex] = person;
    this.setState( {
      persons : [
        {name: "Aditee", age: 20},
        {name: event.target.value, age: 22},
        {name: "Someone", age: 26}
      ],
      
    })

  }
  togglePersonHandler = () => {
    const doesShow = this.state.showpersons;
    this.setState({showpersons : !doesShow});
  }
  render(){
    const style= {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      ':hover':{
        backgroundColor: 'lightgreen',
        color:'black'
      }
    };

    let persons = null;
    if(this.state.showpersons) {
      persons = (
        <div>
          { this.state.persons.map((person,index) => {
            return <Person click={()=>this.deletePersonHandler(index)} 
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event)=>this.nameChangedHandler(event,person.id)}
             /> 
          })}
        </div> 
      );
      
      

    }

    let classes = [];
    if(this.state.persons.length <=2)
    classes.push('red');
    if(this.state.persons.length <=1)
    classes.push('bold');

    return(
      
      <div className="App">
        <h1>Hi, I'm a React app.</h1>
        <h4 className={classes.join(' ')}>This really works.</h4>
        <StyledButton alt={this.state.showpersons}
         onClick={this.togglePersonHandler}>Toggle persons.</StyledButton>
         {persons}
      </div>
    );
    return React.createElement('div',{className:'App'},null,React.createElement('h1',null,'Does this work now?'))
  }
}

export default App;
