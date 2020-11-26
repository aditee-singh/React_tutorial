import React from 'react';
import classes from './Cockpit.css';

const cockpit = () => {
const assignedClasses = [];
if( props.persons.length <= 2){
    assignedClasses.push(classes.red);
}
if(props.persons.push<=1){
    assignedClasses.push(classes.bold);
}

return (
    <div className={classes.Cockpit}><h1>Hi, I'm a React app.</h1>
        <h4 className={classes.join(' ')}>This really works.</h4>
        <button className="button"
        onClick={this.togglePersonHandler}>Toggle persons.</button>
        {persons}
     </div>
);
};

export default cockpit;