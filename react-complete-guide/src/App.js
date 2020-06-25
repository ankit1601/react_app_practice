import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 state = {
   persons:[
     {name:'ANkit', age:28},
     {name:'Ajay', age:46},
     {name:'Amit', age:36}
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

 nameChangeHandler = (event)  => {
  // console.log("Was Click")
  //We should not change state direct without using setState method
  this.setState({persons:[
    {name:"Ankit Aggarwal", age:28},
    {name:event.target.value, age:46},
    {name:'Amit', age:30}
  ]})
 }

 togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow})
 }
 
 render(){
   const style = {
     backgroundColor:'white',
     font:'inherit',
     border:'1px solid blue',
     padding:'8px',
     cursor:'pointer  '
   }

   let persons = null;

   if(this.state.showPersons){
     persons = (
      <div>
      <Person  
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}/>
      <Person 
      name={this.state.persons[1].name}
      age={this.state.persons[1].age}
      click={this.switchNameHandler.bind(this,"Ankit!!!")}
      changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}/>
  </div> 
     )
   }
  return (
    <div className="App">
      <h1>Hi, I am React App</h1>
      <p>This is really working</p>
      <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
      <button style={style} onClick={()=>{return this.switchNameHandler("Ankit Aggarwal!!!")}}>Switch Name</button>
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

export default App;
