import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxhoc';

const cockpit = (props)=>{

    let btnClass = classes.Button

    if(props.showPersons){
        btnClass = [classes.Button,classes.Red].join(" ")
    }
    let assignedClasses = [];
    if(props.persons.length<=2){
      assignedClasses.push(classes.red)
    }
    if(props.persons.length<=1){
      assignedClasses.push(classes.bold)
    }

    return(
        // <div>
        //     <h1 key={"hdsgksjdh"} >Hi, I am React App for {props.appTitle}</h1>
        //     <p key={"sdnhdj"} className={assignedClasses.join(' ')}>This is really working</p>
        //     <button key={'shdgshad'} className={btnClass}  onClick={props.toggle}>Toggle Persons</button>
        //     <button key={'shdgssjdad'} className={btnClass} onClick={(event)=>props.changename('Ankit!!!!')}>Switch Name</button>
        // </div>

        <Aux>
            <h1 key={"hdsgksjdh"} >Hi, I am React App for {props.appTitle}</h1>
            <p key={"sdnhdj"} className={assignedClasses.join(' ')}>This is really working</p>
            <button key={'shdgshad'} className={btnClass}  onClick={props.toggle}>Toggle Persons</button>
            <button key={'shdgssjdad'} className={btnClass} onClick={(event)=>props.changename('Ankit!!!!')}>Switch Name</button>
        </Aux>
    );
}

export default cockpit;