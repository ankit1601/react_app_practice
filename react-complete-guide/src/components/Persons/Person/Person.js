import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component{
    constructor(props){
        super(props)
        console.log('[Person.js] Inside Constructor and this props',props)
     }
    
     componentWillMount(){
       console.log('[Person.js] component will mount')
     }
    
     componentDidMount(){
       console.log('[Person.js] component did mount')
     }
    render(){
        console.log('[Person.js] render is called')
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm a {this.props.name} i am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
        
            </div>
            )
    }
}

export default Person;

// const person = (props) =>{
//     return (
//     <div className={classes.Person}>
//         <p onClick={props.click}>I'm a {props.name} i am {props.age} years old</p>
//         <p>{props.children}</p>
//         <input type="text" onChange={props.changed} value={props.name}/>

//     </div>
//     )
// }

// export default person;