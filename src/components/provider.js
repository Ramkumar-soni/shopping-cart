import React, { Component } from 'react';

export const MContext = React.createContext();  //exporting context object
class MyProvider extends Component {
state = {price:''}
render() {
        return (
            <MContext.Provider value={
            {   state: this.state,
                setMessage: () => this.setState({
                            price: 350  })}}>
            {this.props.children}   //this indicates that the global store is accessible to all the child tags with MyProvider as Parent
            </MContext.Provider>)
    }
}
export default MyProvider;