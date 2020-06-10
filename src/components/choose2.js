import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { withRouter } from "react-router";
import Choose1 from './choose1'
import { Button } from 'semantic-ui-react'
import Choose4 from './choose4';
import { connect } from 'react-redux'
// import selectUser from './select_user'
import UserDetail from './user-detail'
import Choose3 from './choose3';
class Choose2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: '',
            message: 'wait',
            message1: 'Wait',
            showHideDemo1: false,
            showHideDemo2: false
        }
    }

    handleChange = () => {
        browserHistory.push("/");

    }
    handleChange3 = () => {
        this.setState({
            message: 'FREE'
        })

    }
    handleChange4 = () => {
        this.setState({
            message: 'No Needed!!'
        })

    }
    callbackFunction = (childData) => {
        this.setState({ message: childData })
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
    hideComponent = () => {
        this.setState({
            showHideDemo1: !this.state.showHideDemo1
        })
    }
    hideComponent1 = () => {
        this.setState({
            showHideDemo2: !this.state.showHideDemo2
        })
    }
    handleChange1 = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }
    
    render() {
        console.log('Available', this.state.message);
        console.log('Available', this.state.message1);
        console.log('demo', this.state.showHideDemo2);
        // console.log('shivani soni',this.props.price);
        return (
            <div>
                {(context) => (
                    <p>{context.state.message}}</p>)}
                <img src="/images/img9.jpg" style={{ width: '100%', height: '300px' }} />
                <div style={{ backgroundColor: '#c48d47', height: '115px' }}>
                    <div style={{ display: 'inline-block' }}>
                        <table>
                            <tr><td>
                                <img src="/images/img15.jpg" alt="Avatar" style={{
                                    verticalAlign: 'middle',
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%', border: '2px solid white',
                                    boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 1)'
                                }} />
                                <p><b>Step 1:</b><br /> Choose your products</p></td>
                                <td style={{ paddingLeft: '20px' }}>
                                    <img src="/images/img22.webp" alt="Avatar" style={{
                                        verticalAlign: 'middle',
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%', border: '2px solid white',
                                        boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 1)'
                                    }} />
                                    <p><b>Step 2:</b><br /> Wrap Your gift</p></td>
                                <td style={{ paddingLeft: '20px' }}>
                                    <img src="/images/img19.jpg" alt="Avatar" style={{
                                        verticalAlign: 'middle',
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%', border: '2px solid white',
                                        boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 1)'
                                    }} />
                                    <p><b>Step 3:</b><br /> Add a message</p></td>
                                <td style={{ paddingLeft: '20px' }}>
                                    <img src="/images/img13.jpg" alt="Avatar" style={{
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
                <h3>STEP 2 OF 4: GIFT WRAP</h3>
                <h2>{this.state.message}</h2>
                <p>Would you like to get the box gift wrapped?</p>
                <div style={{ display: 'inline-block' }}>
                    <table class="table-bordered">
                        <tr>
                            <td style={{ padding: '10px' }}>
                                <img src={this.props.user.image} alt="Avatar" style={{ width: '175px', height: '200px', border: '1px solid black' }} />
                            </td>
                            <td style={{ textAlign: 'left', paddingLeft: '10px', paddingRight: '200px' }}>
                                <div>
                                    <input type="radio" name="radio" onClick={this.handleChange3} value="optionr1" onChange={this.handleChange1} />Yes, i'd like that!
                                 </div>
                                <br />
                                <div>
                                    <input type="radio" name="radio" onClick={this.handleChange4} value="optionr2" onChange={this.handleChange1} />No, I'd prefer not to.
                              </div><br /><br /><br />
                                <div>
                                    <Button disabled={!this.state.selectedOption} onClick={this.hideComponent} style={{ backgroundColor: 'red', color: 'white' }}  >MOVE TO STEP 3 > </Button>
                                    <Button onClick={this.handleChange} style={{ backgroundColor: 'red', color: 'white' }}  >Back </Button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div><br /><br /><br />
                <div class="container" style={{ textAlign: 'right', color: 'red', fontSize: "25px" }}>
                    <i type='button' class="shopping cart icon"></i>
                </div>
                {this.state.showHideDemo1 &&
                    <div>
                        <div >
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
                                            <img src={this.props.user.image} alt="Avatar" style={{ width: '175px', height: '200px', border: '1px solid black' }} />
                                        </td>
                                        <td style={{ textAlign: 'left', paddingLeft: '10px', paddingRight: '80px' }}>
                                            <div>
                                                <input type="radio" name="radio" onClick={this.handleChange5} value="option1" onChange={this.handleChange1} />I Want a printed message.
             </div>
                                            <br />
                                            <div>
                                                <input type="radio" name="radio" onClick={this.handleChange5} value="option2" onChange={this.handleChange1} />I want a blank card to write the message myself.
             </div><br />
                                            <div>
                                                <input type="radio" name="radio" onClick={this.handleChange6} value="option3" onChange={this.handleChange1} />No,I do not want a card.
             </div><br /><br /><br />
                                            <div>
                                                <Button disabled={!this.state.selectedOption} onClick={this.hideComponent1} style={{ backgroundColor: 'red', color: 'white' }} >REVIE MY GIFT > </Button>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div><br /><br /><br />
                            <div class="container" style={{ textAlign: 'right', color: 'red', fontSize: "25px" }}>
                                <i type='button' class="shopping cart icon"></i>
                            </div>
                        </div><br />
                        <div>
                            {this.state.showHideDemo2 && <UserDetail message={this.state.message} message1={this.state.message1} />}
                        </div>

                    </div>
                }
                {/* <Choose3  /> */}
                {/* <Choose4 message={this.state.message} message1={this.state.message1} /> */}
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.activeUser
    };
}
export default connect(mapStateToProps)(Choose2);
