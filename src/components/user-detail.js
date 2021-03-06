import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Choose2 from './choose2';
import Basket from './basket'
import { BrowserRouter } from 'react-router'
import { browserHistory } from 'react-router';
import selectUser from './select_user'

class Choose4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isButtonDisabled: false,
            cartItems: [],
            text: this.props.message,
            text1: this.props.message1,
            text2: this.props.user.first,
            text3: this.props.user.price,
            text4: this.props.user.image
        }

    }
    handleChange1 = () => {
        browserHistory.push("/");
    }
    uploadFile = () => {
        // first set the isButtonDisabled to true
        this.setState({
          isButtonDisabled: true
        });
        // then do your thing
      }
    handleAddToCart = () => {
        console.log('count', this.props.users.length);
        this.setState(state => {
            const cartItems = state.cartItems;
            let productAlreadyCart = false;
            cartItems.forEach(item => {
                if (item.id === this.props.user.id) {
                    productAlreadyCart = true;
                    item.count++
                }
            });
            if (!productAlreadyCart) {
                cartItems.push({ ...this.props.user, count: 1 });
            }
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            return cartItems;
        })
    }
    handleChange = () => {
        this.setState({
            text4: "/images/defultimg.png",
            text2: 'Selected Product Name',
            text3: '0',
            text: 'none',
            text1: 'none',
        })
    }
    componentWillMount() {
        if (localStorage.getItem('cartItems')) {
            this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')) });
        }
    }

    render() {
        console.log('value', this.props.users);
        console.log('text', this.state.text);
        console.log('text', this.state.text1);
        console.log('text', this.state.text2);
        return (
            <div>
                {/* <Choose2 /> */}
                <img src="/images/img9.jpg" style={{ width: '100%', height: '300px' }} />
                <div style={{ backgroundColor: '#c48d47', height: '115px' }}>
                    <div style={{ display: 'inline-block' }}>
                        <table>
                            <tr><td>
                                <img type="button" src="/images/img15.jpg" alt="Avatar" class="avatar" style={{
                                    verticalAlign: 'middle',
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%', border: '2px solid white',
                                    boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 1)'
                                }} />
                                <p style={{color:'black'}}><b>Step 1:</b><br /> Choose your products</p></td>
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
                                    <p style={{color:'black'}}><b>Step 4:</b><br /> Review your gift box</p></td>
                            </tr>
                        </table>
                    </div>
                </div><br />
                <h3>STEP 4 OF 4: PREVIEW YOUR GIFT BOX</h3>
                <div style={{ display: 'inline-block' }}>
                    <table class="">
                        <tr>
                            <td style={{ padding: '10px' }}>
                                <img src={this.state.text4} alt="Avatar" style={{ width: '175px', height: '220px', border: '1px solid black' }} />
                            </td>
                            <td style={{ textAlign: 'left', paddingLeft: '20px', paddingRight: '200px', paddingTop: '20px' }}>
                                <tr>
                                    <td style={{ textAlign: 'left' }}>
                                        <p><b>Your Gift Box Contains:</b></p>
                                        <ul>
                                            <td><li>{this.state.text2}</li></td><td style={{ paddingLeft: '32px' }}><b>&#8377;{this.state.text3}</b></td><br />
                                            <td><li>Gift Wrapping</li></td><td style={{ paddingLeft: '86px' }}>{this.state.text}</td><br />
                                            <td><li>Personalised card</li></td><td style={{ paddingLeft: '64px' }}>{this.state.text1}</td>
                                        </ul><br />
                                        <td>Total:</td><td style={{ paddingLeft: '35px' }}><b>&#8377;{this.state.text3}</b></td>
                                    </td>
                                </tr>
                                {/* <td><b>{this.props.name}</b></td> */}
                                <br /><br />
                                <div>
                                    <Button onClick={() => this.props.selectUser(this.props.users, this.handleAddToCart(), this.handleChange() , this.uploadFile())}  disabled={this.state.isButtonDisabled} style={{ backgroundColor: 'red', color: 'white' }} >ADD TO CARD</Button>
                                    <button type="button" class="btn btn-info" onClick={this.handleChange1}>Back To Page:1</button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div><br /><br />
                <div class="container" style={{ textAlign: 'right', color: 'red', fontSize: "25px" }}>
                    <i type='button' class="shopping cart icon"></i><br />
                    <Basket count={this.props.users.length} cartItems={this.state.cartItems} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users,
        user: state.activeUser
    };
}
export default connect(mapStateToProps, { selectUser: selectUser })(Choose4);
