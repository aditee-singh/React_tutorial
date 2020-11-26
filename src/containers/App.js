import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';



class App extends Component{
  state = {
    persons : [
      {id:'ghftf',name: "Aditee", age: 19},
      {id:'hgtyf',name: "Isha", age: 22},
      {id:'hjgtf',name: "Someone", age: 23}
    ],
    otherState: 'some other value',
    showpersons : false
    };
    nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });
  
      const person = {
        ...this.state.persons[personIndex]
      };
  
  
      person.name = event.target.value;
  
      const persons = [...this.state.persons];
      persons[personIndex] = person;
  
      this.setState({ persons: persons });
    };
  
    deletePersonHandler = personIndex => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({ persons: persons });
    };
  
    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({ showPersons: !doesShow });
    };
  
    render() {
      let persons = null;
      
      if (this.state.showPersons) {
        persons = 
            <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>;
        
  
        
      }
  
      const assignedClasses = [];
      if (this.state.persons.length <= 2) {
        assignedClasses.push(classes.red); 
      }
      if (this.state.persons.length <= 1) {
        assignedClasses.push(classes.bold); 
      }
  
      return (
        <div className={classes.App}>
          <Cockpit showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
          {persons}
        </div>
      );
      
    }
  }
  
  export default App;
  