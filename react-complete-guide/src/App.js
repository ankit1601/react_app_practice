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
   ]
 }
 switchNameHandler = ()  => {
  // console.log("Was Click")
  //We should not change state direct without using setState method
  this.setState({persons:[
    {name:'Ankit Agarwwal', age:28},
    {name:'Ajay', age:46},
    {name:'Amit', age:34}
  ]})
 }
 
 render(){
  return (
    <div className="App">
      <h1>Hi, I am React App</h1>
      <p>This is really working</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

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
