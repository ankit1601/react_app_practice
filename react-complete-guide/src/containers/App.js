import React, {Component,PureComponent} from 'react';
// import logo from './logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'; //this is higher order component provided by react 16 it's 
//a component to handle any error that components might throw. This will work only in production mode not in Development mode
import WithClass from '../hoc/WithClass';
import withFunClass from '../hoc/withFuncClass';
import Auxhoc from '../hoc/Auxhoc';

class App extends Component {

 constructor(props){
    super(props)
    console.log('[App.js] Inside Constructor and this props',props)
    this.state = {
      persons:[
        {id:"shjksa",name:'ANkit', age:28},
        {id:"jkdjshd",name:'Ajay', age:46},
        {id:"kjhfkjdh", name:'Amit', age:36}
      ],
      showPersons:false,
      toggleClicked:0
    }
 }

 componentWillMount(){
   console.log('[App.js] component will mount')
 }

 componentDidMount(){
   console.log('[App.js] component did mount')
 }

 shouldComponentUpdate(nextProps,nextState){
  console.log("[UPDATE App.js] inside shouldComponentUpdate",nextProps, nextState)
  return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  // return true
}

componentWillUpdate(nextProps,nextState){
 console.log("[UPDATE App.js] inside componentWillUpdate",nextProps, nextState)
}

componentDidUpdate(){
 console.log("[UPDATE App.js] inside componentDidUpdate")
}

//  state = {
//    persons:[
//      {id:"shjksa",name:'ANkit', age:28},
//      {id:"jkdjshd",name:'Ajay', age:46},
//      {id:"kjhfkjdh", name:'Amit', age:36}
//    ],
//    showPersons:false
//  }
 switchNameHandler = (newName)  => {
  // console.log("Was Click")
  //We should not change state direct without using setState method
  const persons = [...this.state.persons];
  persons[0].name=newName
  this.setState({persons:persons})
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
    // this.setState({showPersons:!doesShow,toggleClicked:this.state.toggleClicked+1}) //this is not the best practice when we are dependent on previous state
    // As set state is Asynchronous possible that some other method have changed it value to the best way is to use new way which is

    this.setState(
      (prevState, props)=>{
        return {
          showPersons:!doesShow,
          toggleClicked:prevState.toggleClicked+1
        }
      }
    )
 }
 
 render(){
   console.log('[App.js] render is called')
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
   }
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

  return (
      <Auxhoc>
        <button onClick={()=>{this.setState({showPersons:true})}}>SHOW PERSONS</button>
        <Cockpit appTitle = {this.props.title}
                 persons={this.state.persons} 
                 showPersons={this.state.showPersons} 
                 toggle={this.togglePersonHandler} 
                 changename={this.switchNameHandler}></Cockpit>
        {persons}
      </Auxhoc>
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

export default withFunClass(App, classes.App); // Radium is called Higher Order Component
