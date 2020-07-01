import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
    constructor(props){
        super(props)
        console.log('[Persons.js] Inside Constructor and this props',props)
        this.lastPersonRef = React.createRef()
     }
    
     componentWillMount(){
       console.log('[Persons.js] component will mount')
     }
    
     componentDidMount(){
       console.log('[Persons.js] component did mount')
       this.lastPersonRef.current.focus()
     }
     componentWillReceiveProps(nextProps){
         console.log('[UPDATE Persons.js] inside componentWillReceiveProps',nextProps)
     }

     shouldComponentUpdate(nextProps,nextState){
         console.log("[UPDATE Persons.js] inside shouldComponentUpdate",nextProps, nextState)
         return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked
        //  return true;
     }

     componentWillUpdate(nextProps,nextState){
        console.log("[UPDATE Persons.js] inside componentWillUpdate",nextProps, nextState)
     }

     componentDidUpdate(){
        console.log("[UPDATE Persons.js] inside componentDidUpdate")
     }
    render(){
        console.log('[Persons.js] render is called')
        return  this.props.persons.map((person, index) =>  {
            return <Person position={index} click = {()=>this.props.clicked(index)}
                           name={person.name} 
                           age={person.age} 
                           changed={(event)=>{this.props.changed(event,person.id)}} 
                           forwardRefs={this.lastPersonRef}/>
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