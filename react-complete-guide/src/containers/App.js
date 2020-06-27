import React, {Component} from 'react';
// import logo from './logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'; //this is higher order component provided by react 16 it's 
//a component to handle any error that components might throw. This will work only in production mode not in Development mode

class App extends Component {
 state = {
   persons:[
     {id:"shjksa",name:'ANkit', age:28},
     {id:"jkdjshd",name:'Ajay', age:46},
     {id:"kjhfkjdh", name:'Amit', age:36}
   ],
   showPersons:false
 }
 switchNameHandler = (newName)  => {
  // console.log("Was Click")
  //We should not change state direct without using setState method
  this.setState({persons:[
    {name:newName, age:28},
    {name:'Ajay', age:46},
    {name:'Amit', age:34}
  ]})
 }

 nameChangeHandler = (event, id)  => {
  // console.log("Was Click")
  //We should not change state direct without using setState method
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  })
  const person = {
    ...this.state.persons[personIndex]
  }

  //alternative but less prefered method below

  // const person = Object.assign( {}, this.state.persons[personIndex])

  person.name = event.target.value

  const persons = [...this.state.persons];

  persons[personIndex] = person

  this.setState({persons:persons})
 }

 deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;// this will copy the reference of original array just to avoid we can copy
    // const persons = this.state.persons.splice() // splice without arguements copy complete array but we have another syntax
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons:persons})
 }

 togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow})
 }
 
 render(){
   console.log('render is called')
  //  const style = {
  //    backgroundColor:'green',
  //    color:"white", 
  //    font:'inherit',
  //    border:'1px solid blue',
  //    padding:'8px',
  //    cursor:'pointer',
  //  }

   let persons = null;
  //  let btnClass = ''

   if(this.state.showPersons){
     persons = 
        <Persons persons={this.state.persons} 
                 clicked={this.deletePersonHandler} 
                 changed={this.nameChangeHandler}>
        </Persons>

      {/* {this.state.} */}
      {/* <Person  
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}/>
      <Person 
      name={this.state.persons[1].name}
      age={this.state.persons[1].age}
      click={this.switchNameHandler.bind(this,"Ankit!!!")}
      changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}/> */} 
     

     //style.backgroundColor ='red';
    //  btnClass = classes.Red //This is enabled  by css module. it keep all class when you import classes(any name allowed)
                            // from css file. classes will contain all class even if they are nested
   }

  return (
      <div className={classes.App}>
        <Cockpit appTitle = {this.props.title}
                 persons={this.state.persons} 
                 showPersons={this.state.showPersons} 
                 toggle={this.togglePersonHandler} 
                 changename={this.switchNameHandler}></Cockpit>
        {persons}
      </div>
  );
 } 
 

  // return React.createElement('div', null , 'h1','hi i\'m React App !!!')
  //This is how you create Nested html tags using react method
  //Here you see second argument is configuration for created Element
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'hi i am React App!!! using Create Element Method'))
  //its very painful to right code using createElement method
  //hence we use more simpler method called JSX to write code
  //many build tools and compilers finally convert the JSX to react javascript code to create Elements
}

export default App; // Radium is called Higher Order Component
