import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props)=>{

    let btnClass = ''

    if(props.showPersons){
        btnClass = classes.Red
    }
    let assignedClasses = [];
    if(props.persons.length<=2){
      assignedClasses.push(classes.red)
    }
    if(props.persons.length<=1){
      assignedClasses.push(classes.bold)
    }

    return(
        <div className={classes.Cockpit}>
            <h1 key={"hdsgksjdh"} >Hi, I am React App for {props.appTitle}</h1>
            <p key={"sdnhdj"} className={assignedClasses.join(' ')}>This is really working</p>
            <button key={'shdgshad'} className={btnClass}  onClick={props.toggle}>Toggle Persons</button>
            <button key={'shdgssjdad'}  onClick={(event)=>props.changename('Ankit!!!!')}>Switch Name</button>
        </div>
    );
}

export default cockpit;