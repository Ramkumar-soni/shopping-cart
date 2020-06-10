import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Choose4 extends Component {
    constructor(props) {
        super(props)
        this.state={}

    }
    handleChange = () =>{
        this.props.history.push("/");
    }
    

    render() {
        console.log("price",this.props.user);
        console.log("name",this.props.name);
        console.log('Ram Soni',this.props.message);
        console.log('Ram Soni1',this.props.message1);
        return (
            <div>
                <img src="/images/img9.jpg" style={{ width: '100%', height: '300px' }} />
                <div style={{ backgroundColor: '#c48d47', height: '115px' }}>
                    <div style={{ display: 'inline-block' }}>
                        <table>
                            <tr><td>
                                <img src="/images/img15.jpg" alt="Avatar" class="avatar" style={{
                                    verticalAlign: 'middle',
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%', border: '2px solid white',
                                    boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 1)'
                                }} />
                                <p><b>Step 1:</b><br /> Choose your products</p></td>
                                <td style={{ paddingLeft: '20px' }}>
                                    <img src="/images/img22.webp" alt="Avatar" class="avatar" style={{
                                        verticalAlign: 'middle',
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%', border: '2px solid white',
                                        boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 1)'
                                    }} />
                                    <p><b>Step 2:</b><br /> Wrap Your gift</p></td>
                                <td style={{ paddingLeft: '20px' }}>
                                    <img src="/images/img19.jpg" alt="Avatar" class="avatar" style={{
                                        verticalAlign: 'middle',
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%', border: '2px solid white',
                                        boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 1)'
                                    }} />
                                    <p><b>Step 3:</b><br /> Add a message</p></td>
                                <td style={{ paddingLeft: '20px' }}>
                                    <img src="/images/img13.jpg" alt="Avatar" class="avatar" style={{
                                        verticalAlign: 'middle',
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%', border: '2px solid white',
                                        boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 1)'
                                    }} />
                                    <p><b>Step 4:</b><br /> Review your gift box</p></td>
                            </tr>
                        </table>
                    </div>
                </div><br />
                <h3>STEP 4 OF 4: PREVIEW YOUR GIFT BOX</h3>
                <div style={{ display: 'inline-block' }}>
                    <table class="table-bordered">
                        <tr>
                            <td style={{ padding: '10px',border:'1px solid black' }}>
                                <img src="/images/img20.jpg" alt="Avatar" style={{ width: '175px', height: '200px', border: '1px solid black' }} />
                            </td>
                            <td style={{ textAlign: 'left',paddingLeft:'20px', paddingRight: '200px', paddingTop:'20px' }}>
                                <tr>
                                    <td style={{ textAlign: 'left' }}>
                                    <p><b>Your Gift Box Contains:</b></p>
                                    <ul>
                                <td><li>{this.props.user}</li></td><td style={{paddingLeft:'35px'}}><b>{this.props.user}</b></td><br/>
                                <td><li>Gift Wrapping</li></td><td style={{paddingLeft:'35px'}}>{this.props.message}</td><br/>
                                <td><li>Personalised card</li></td><td style={{paddingLeft:'35px'}}>{this.props.message1}</td>
                                        </ul><br/>
                                        <td>Total:</td><td style={{paddingLeft:'35px'}}><b>{this.props.user}</b></td>
                                    </td> 
                                </tr>
                                {/* <td><b>{this.props.name}</b></td> */}
                                <br /><br/>
                                <div>
                                    <Button style={{ backgroundColor: 'red', color: 'white' }} >ADD TO CARD</Button>
                                    <Button  onClick={this.handleChange}>Back To Page:1</Button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div><br /><br />
                <div class="container" style={{ textAlign: 'right', color: 'red', fontSize: "25px" }}>
                    <i type='button' class="shopping cart icon"></i>
                </div>
            </div>
        )
    }
}
// const mapStateToProps = (state) => {
//     return {
//       price: state.price,
//       name: state.name
//     }
//   }
//   const mapDispatchToProps = (dispatch) =>{
//     return{
//         changeName : (price)=>{dispatch({ type:'SET_VISIBILITY_FILTER1', payload:price})},
//         changeName1 : (name)=>{dispatch({ type:'SET_VISIBILITY_FILTER', payload:name})}
//         //changeName2 : (price)=>{dispatch({ type:'CHANGE_NAME', payload:price})}
//     }
// }
const mapStateToProps = (state) => {
    return {
        // user: state.activeUser
    };
}
export default connect(mapStateToProps)(Choose4);
