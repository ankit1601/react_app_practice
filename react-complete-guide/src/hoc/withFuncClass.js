//This is another way of writing HOC here we don't return JSX but return function
//We finally import this and put it like hoc(App) 
// Here we returns a function instead of JSX
// first try without pass props in Wrapped component
// one beauty is we will use spread operator and just pass existing props

import React, {Component} from  'react';

// const withFunClass = (WrappedComponent, className) => {
//     return (props) => {
//             return (<div className = {className}>
//                 <WrappedComponent {...props}/>
//             </div>)
//         }
// }

const withFunClass = (WrappedComponent, className) => {
    return class extends Component {
        render(){
            return(
                (<div className = {className}>
                    <WrappedComponent {...this.props}/>
                </div>)
            )
        }
    } 
}

// this is stateless component but we can also return a stateful component say if you want to do somethiing in lifecycle hooks
// notice one thing here is we don't give any name to class it is ananomous class and we use this keyword to access props

export default withFunClass;