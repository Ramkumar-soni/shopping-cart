import React, {Component} from 'react';

import Child1 from './child1';
class Parent extends Component{
    parentFunction=(data_from_child)=>{
        console.log(data_from_child);
    }
    
    render(){
        return(
            <div>      
                <Child1 functionCallFromParent={this.parentFunction.bind(this)}/>
            </div>
        );
    }
}
export default Parent;