// import React, { Component } from 'react';
// import Choose4 from './choose4';

// const UpdatedComponents = OriginalComponents =>{
//     class NewComponents extends Component {
//         constructor(props) {
//             super(props)
//             this.state={
//                 message:'wait'
//             }
//         }
//         handleChange3 =() =>{
//             this.setState({
//                 message:'free'
//             })
           
//         }
//         handleChange4 =() =>{
//             this.setState({
//                 message:'No needed!!' 
//             })
           
//         }
    
//         render() {
//             return (
//                 <div>
//             <OriginalComponents message={this.state.message} handleChange3={this.handleChange3} handleChange4={this.handleChange4}/>
//             <Choose4 message={this.state.message} handleChange3={this.handleChange3} handleChange4={this.handleChange4} />
//                 </div>
                
//             );
//         }
        
//     }
//     return NewComponents   
// }
// export default UpdatedComponents

import React from 'react';
// import classNames from 'classnames';

class CheckAndUncheck extends React.Component {

  constructor(props) {
    super(props);
    this.checkIt = this.checkIt.bind(this);
    this.unCheckIt = this.unCheckIt.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      checked:false
    };
  }

  checkIt() {
    this.setState({
      checked:true
    });
  }

  unCheckIt() {
    this.setState({
      checked:false
    });
  }

  handleChange(evt) {
     if(this.state.checked !== evt.target.checked) {
        this.setState({
          checked:evt.target.checked
        });
     }
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.checkIt}>Check</button> &nbsp;&nbsp;&nbsp; <button onClick={this.unCheckIt}>Uncheck</button>
        </div>
        <br/>
        <div>
          Checkbox :: <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
        </div>
        <br/>
        <div>
          Radio button :: <input type="radio" checked={this.state.checked} onChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

CheckAndUncheck.propTypes = {
}

CheckAndUncheck.defaultProps = {
}

export default CheckAndUncheck;