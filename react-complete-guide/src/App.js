import React, {Component} from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Person from './Person/Person';

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
   const style = {
     backgroundColor:'green',
     color:"white", 
     font:'inherit',
     border:'1px solid blue',
     padding:'8px',
     cursor:'pointer',
   }

   let persons = null;

   if(this.state.showPersons){
     persons = (
      <div>

      {this.state.persons.map((person, index) =>  {
         return <Person key={person.id} click = {()=>this.deletePersonHandler(index)}
                        name={person.name} 
                        age={person.age} 
                        changed={(event)=>{this.nameChangeHandler(event,person.id)}} />
      })}
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
  </div> 
     )

     style.backgroundColor ='red';
   }

  let assignedClasses = [];
  if(this.state.persons.length<=2){
    assignedClasses.push(classes.red)
  }
  if(this.state.persons.length<=1){
    assignedClasses.push(classes.bold)
  }
  return (
      <div className={classes.App}>
        <h1 key={"hdsgksjdh"} >Hi, I am React App</h1>
        <p key={"sdnhdj"} className={assignedClasses.join(' ')}>This is really working</p>
        <button key={'shdgshad'} style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        <button key={'shdgssjdad'} style={style} onClick={()=>{return this.switchNameHandler("Ankit Aggarwal!!!")}}>Switch Name</button>
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
