import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import Choose4 from './choose4';
// import updatedComponents from './withCounter'

class Choose3 extends Component {
    constructor(props) {
        super(props)
        this.state={
            selectedOption:'',
            message1:'wait',
            showHideDemo1: false
        }
    }
    // handleChange = () =>{
    //     this.props.history.push("/Service");
    // }
    handleChange1 = (e) =>{
        this.setState({
            selectedOption: e.target.value
        })
    }
    handleChange5 = () => {
        this.setState({
            message1: 'free'
        })

    }
    handleChange6 = () => {
        this.setState({
            message1: 'No needed!!'
        })
    }
      hideComponent = () =>{
        this.setState({
            showHideDemo1: !this.state.showHideDemo1
        })
    }

    render() {
        console.log('Choose3',this.state.message1);
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
                </div>
                <h3>STEP 3 OF 4: ADD A PERSONAL TOUCH</h3>
                <p>Do you want to add a message?</p>
                <h2>{this.state.message1}</h2>
                <h2>{this.props.name}</h2>
                <div style={{ display: 'inline-block' }}>
                    <table class="table-bordered">
                        <tr>
                            <td style={{ padding: '10px' }}>
                                <img src="/images/img23.webp" alt="Avatar" style={{ width: '175px', height: '200px', border: '1px solid black' }} />
                            </td>
                            <td style={{ textAlign: 'left', paddingLeft: '10px', paddingRight: '80px' }}>
                                <div>
                                    <input type="radio" name="radio" onClick={this.handleChange5}  value="option1" onChange={this.handleChange1} />I Want a printed message.
             </div>
                                <br />
                                <div>
                                    <input type="radio" name="radio" onClick={this.handleChange5}  value="option2" onChange={this.handleChange1} />I want a blank card to write the message myself.
             </div><br />
                                <div>
                                    <input type="radio" name="radio" onClick={this.handleChange6}  value="option3" onChange={this.handleChange1} />No,I do not want a card.
             </div><br /><br/><br/>
                                <div>
                                    <Button disabled={!this.state.selectedOption} onClick={ this.hideComponent}  style={{backgroundColor:'red',color:'white'}} >REVIE MY GIFT > </Button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div><br /><br/><br/>
                <div class="container" style={{ textAlign: 'right', color: 'red', fontSize:"25px" }}>
                    <i type='button' class="shopping cart icon"></i>
                </div>
                <div>
                    { this.state.showHideDemo1 && <Choose4 message1={this.state.message1}  /> }
                </div>

                 {/* <Choose4 message1={this.state.message}  /> */}
            </div>
        )
    }
}
export default Choose3;
