import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
 render(){
  return (
    <div className="App">
      <h1>Hi, I am React App</h1>
      <p>This is really working</p>
      <button>Switch Name</button>
      <Person name="Ankit" age="28"/>
      <Person name="Ajay" age="42">My Hobbies: Racing</Person>
      <Person name="Amit" age="35"/>

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
