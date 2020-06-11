import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import { browserHistory } from 'react-router';
import Choose4 from './choose4';
import { connect } from 'react-redux'
import selectUser from './select_user'
import UserDetail from './user-detail'
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
    handleChange = () => {
        browserHistory.push("/");
        // browserHistory.pushState(null, '/');

    }
    handleChange1 = (e) =>{
        this.setState({
            selectedOption: e.target.value
        })
    }
    handleChange5 = () => {
        this.setState({
            message1: 'FREE'
        })

    }
    handleChange6 = () => {
        this.setState({
            message1: 'No Needed!!'
        })
    }
    hideComponent1 = () => {
        this.setState({
            showHideDemo2: !this.state.showHideDemo2
        })
    }

    render() {
        console.log('Choose3',this.state.message1);
        console.log('data',this.props.message);
        return (
            <div>
                <img src="/images/img9.jpg" style={{ width: '100%', height: '300px' }} />
                <div style={{ backgroundColor: '#c48d47', height: '115px' }}>
                    <div style={{ display: 'inline-block' }}>
                        <table>
                            <tr><td>
                            <a
                             href="" style={{color:'black'}}
                             onClick={this.handleChange}
                            >
                                <img src="/images/img15.jpg" alt="Avatar" class="avatar" style={{
                                    verticalAlign: 'middle',
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%', border: '2px solid white',
                                    boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 1)'
                                }} />
                                <p><b>Step 1:</b><br /> Choose your products</p>
                                </a></td>
                                <td style={{ paddingLeft: '20px' }}>
                                    <img src="/images/img22.webp" alt="Avatar" class="avatar" style={{
                                        verticalAlign: 'middle',
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%', border: '2px solid white',
                                        boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 1)'
                                    }} />
                                    <p style={{color:'black'}}><b>Step 2:</b><br /> Wrap Your gift</p></td>
                                <td style={{ paddingLeft: '20px' }}>
                                    <img src="/images/img19.jpg" alt="Avatar" class="avatar" style={{
                                        verticalAlign: 'middle',
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%', border: '2px solid white',
                                        boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 1)'
                                    }} />
                                    <p style={{color:'black'}}><b>Step 3:</b><br /> Add a message</p></td>
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
                                            <img src={this.props.user.image ? this.props.user.image : "/images/defultimg.png"} alt="Avatar" style={{ width: '175px', height: '200px', border: '1px solid black' }} />
                                        </td>
                                        <td style={{ textAlign: 'left', paddingLeft: '10px', paddingRight: '80px' }}>
                                            <div>
                                                <input type="radio" name="radiobutton1" id="radio4" onClick={this.handleChange5} value="option1" onChange={this.handleChange1} />
                                                <label for="radio4">I Want a printed message.</label>
             </div>
                                            <br />
                                            <div>
                                                <input type="radio" name="radiobutton1" id="radio5" onClick={this.handleChange5} value="option2" onChange={this.handleChange1} />
                                                <label for="radio5">I want a blank card to write the message myself.</label>
             </div><br />
                                            <div>
                                                <input type="radio" name="radiobutton1" id="radio6" onClick={this.handleChange6} value="option3" onChange={this.handleChange1} />
                                                <label for="radio6">No,I do not want a card.</label>
             </div><br /><br /><br />
                                            <div>
                                                <Button disabled={!this.state.selectedOption} onClick={this.hideComponent1} style={{ backgroundColor: 'red', color: 'white' }} >REVIE MY GIFT </Button>
                                            </div>
                                        </td>
                                    </tr>
                    </table>
                </div><br /><br/><br/>
                <div class="container" style={{ textAlign: 'right', color: 'red', fontSize:"25px" }}>
                    <i type='button' class="shopping cart icon"></i>
                </div>
                <div>
                {this.state.showHideDemo2 && <UserDetail message={this.props.message} message1={this.state.message1} />}
                </div>

                 {/* <Choose4 message1={this.state.message}  /> */}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.activeUser
    };
}
export default connect(mapStateToProps)(Choose3);

