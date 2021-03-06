import React, {Component} from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass'
import withFunClass from '../../../hoc/withFuncClass';
import Auxhoc from '../../../hoc/Auxhoc';
import PropTypes from 'prop-types';

class Person extends Component{
    constructor(props){
        super(props)
        this.textInput = React.createRef();
        console.log('[Person.js] Inside Constructor and this props', props)
     }
    
     componentWillMount(){
       console.log('[Person.js] component will mount')
     }
    
     componentDidMount(){
       console.log('[Person.js] component did mount')
       if(this.props.position == 0){
        this.textInput.current.focus();
       }
       
     }
     focus(){
       this.textInput.current.focus();
     }
    render(){
        console.log('[Person.js] render is called')
        return (
            <Auxhoc>
                <p onClick={this.props.click}>I'm a {this.props.name} i am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input ref={this.textInput} type="text" onChange={this.props.changed} value={this.props.name}/>
        
            </Auxhoc>
            )

        // this is the feature in React 16 that you can return list of element/array, you don't always need to wrap in parent element like shown below
        // to achieve this by other mean React 16 Provide HOC components. That will be pure react code only to return list in different way so you don't need to create
        // array as well as you don't wrap element unneccessary in parent element.
        // return [
        //   <p onClick={this.props.click}>I'm a {this.props.name} i am {this.props.age} years old</p>,
        //   <p>{this.props.children}</p>,
        //   <input type="text" onChange={this.props.changed} value={this.props.name}/>
        // ]
    }
}

Person.propTypes = {
  click: PropTypes.func,
  name:PropTypes.string,
  age:PropTypes.number,
  changed:PropTypes.func
};

export default withFunClass(Person, classes.Person);

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