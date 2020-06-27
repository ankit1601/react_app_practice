import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
    constructor(props){
        super(props)
        console.log('[Persons.js] Inside Constructor and this props',props)
     }
    
     componentWillMount(){
       console.log('[Persons.js] component will mount')
     }
    
     componentDidMount(){
       console.log('[Persons.js] component did mount')
     }
    render(){
        console.log('[Persons.js] render is called')
        return  this.props.persons.map((person, index) =>  {
            return <Person  click = {()=>this.props.clicked(index)}
                           name={person.name} 
                           age={person.age} 
                           changed={(event)=>{this.props.changed(event,person.id)}} />
         });
    }
}

export default Persons
// const persons = (props) => props.persons.map((person, index) =>  {
//     return <Person  click = {()=>props.clicked(index)}
//                    name={person.name} 
//                    age={person.age} 
//                    changed={(event)=>{props.changed(event,person.id)}} />
//  });

//  export default persons;