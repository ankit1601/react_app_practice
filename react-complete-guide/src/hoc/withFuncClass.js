//This is another way of writing HOC here we don't return JSX but return function
//We finally import this and put it like hoc(App) 
// Here we returns a function instead of JSX
// first try without pass props in Wrapped component
// one beauty is we will use spread operator and just pass existing props

import React from  'react';

const withFunClass = (WrappedComponent, className) => {
    return (props) => {
            return (<div className = {className}>
                <WrappedComponent {...props}/>
            </div>)
        }
}

export default withFunClass;