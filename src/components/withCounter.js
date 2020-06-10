import React, { Component } from 'react';
import Choose4 from './choose4';

const UpdatedComponents = OriginalComponents =>{
    class NewComponents extends Component {
        constructor(props) {
            super(props)
            this.state={
                message:'wait'
            }
        }
        handleChange3 =() =>{
            this.setState({
                message:'free'
            })
           
        }
        handleChange4 =() =>{
            this.setState({
                message:'No needed!!' 
            })
           
        }
    
        render() {
            return (
                <div>
            <OriginalComponents message={this.state.message} handleChange3={this.handleChange3} handleChange4={this.handleChange4}/>
            <Choose4 message={this.state.message} handleChange3={this.handleChange3} handleChange4={this.handleChange4} />
                </div>
                
            );
        }
        
    }
    return NewComponents   
}
export default UpdatedComponents