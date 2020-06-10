import React, { Component } from 'react';
import { connect } from 'react-redux'

function Redux(props){
    console.log(props)
    return(
        <div className="App">
            <h1>I am App Components</h1>
    <h3>My name is {props.myname}</h3>
    <button onClick={()=>props.changeName("shyam")}>Chnage Name!</button>

        </div>
    );
}
const mapStateToProps = (state) => {
    return {
      myname: state.name
    }
  }

const mapDispatchToProps = (dispatch) =>{
    return{
        changeName : (name)=>{dispatch({ type:'CHANGE_NAME', payload:name})},
        changeName : (name)=>{dispatch({ type:'CHANGE_NAME', payload:name})},
        changeName : (name)=>{dispatch({ type:'CHANGE_NAME', payload:name})}

    }
}

  export default connect(mapStateToProps , mapDispatchToProps)(Redux);