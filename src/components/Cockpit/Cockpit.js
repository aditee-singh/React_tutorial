import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
const assignedClasses = [];
let btnClass = '';
if(props.showPersons){
    btnClass = classes.Red;
}
if( props.persons.length <= 2){
    assignedClasses.push(classes.red);
}
if(props.persons.push<=1){
    assignedClasses.push(classes.bold);
}

return (
    <div className={classes.Cockpit}>
        <h1>Hi, I'm a React app.</h1>
        <h4 className={assignedClasses.join(' ')}>This really works.</h4>
        <button className={btnClass}
        onClick={props.clicked}>Toggle persons.</button>
     </div>
);
};

export default cockpit;