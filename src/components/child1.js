import React, {Component} from 'react';

class Child1 extends Component{
    childFunction=(e)=>{
        e.preventDefault();
        this.props.functionCallFromParent("Hello From Child1");
    }
    render(){ 
        return(
            <div>   
                <button onClick={this.childFunction.bind(this)}>Click</button>
            </div>
        );
    }
}
export default Child1;