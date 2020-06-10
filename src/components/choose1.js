import React, { Component } from 'react';
import Choose2 from './choose2'
import { browserHistory } from 'react-router';
import { Button, select, Card, Image } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import selectUser from './select_user'
import UserDetail from './user-detail'
// import Choose3 from './choose3';
import MyProvider from './provider';
import Product from './Products'
import Choose4 from './choose4';
import Basket from './basket'
// import updatedComponents from './withCounter'

class Choose1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            text: 'Add To Box',
            price: 350,
            message: '',
            items: '',
            size: '',
            show: false,
            showOption: false,
            showHideDemo1: false,
            // sort:'',
            products1: [],
            cartItems: [],

        }
    }

    componentDidMount = () => {
        let arr = this.props.users
        //arr.sort((a, b) => b.price - a.price);
        this.setState({ products1: arr });
    }
    handlechangeSorting = (e) => {
        this.setState({ sort: e.target.value });
        console.log(e.target.value);
        if (e.target.value !== '') {
            let arr = this.props.users
            //arr.sort();
            arr.sort((a, b) => (e.target.value === 'lowest') ?
                (a.price > b.price ? 1 : -1) :
                a.first.localeCompare(b.first));
            this.setState({ products1: [...arr] });
        } else {
            let arr = this.props.users
            // arr.sort((a,b) => a.first.localeCompare(b.first));
            arr.sort((a, b) => a.price < b.price ? 1 : -1);
            this.setState({ products1: [...arr] });
        }
        return this.state.products1;
    }


    handleOptionChange = (event) => {
        event.preventDefault();
        this.setState({
            showOption: true
        })
    }
    parentFunction = (data_from_child) => {
        console.log(data_from_child);
    }

    hideComponent = () => {
        this.setState({
            showHideDemo1: !this.state.showHideDemo1
        })
    }

    handleChange = () => {
        browserHistory.push("/contact");
    }



    render() {
        console.log('products1', this.state.products1);
        console.log('users', this.props.users[0].first);
        console.log('activeuser', this.props.activeUser);
        console.log('testing', this.props.users);

        return (
            <div class="">
                <div className="a1">
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
                                    }} /><p><b>Step 1:</b><br /> Choose your products</p></td>
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
                                        <p><b>Step 4:</b><br /> Review your gift box</p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div><br />
                    <p><b>STEP 1 OF 4:</b>&nbsp;CHOOSE</p>
                    <b>Pick the products you want in the box from the extensive list below!(Maximum quantity:)</b><br /><br /><br />
                    <table>
                        <tr>
                            <div class="form-row">
                                <div class="form-group">
                                    <td style={{ paddingLeft: '130px', display: 'block' }}>
                                        Shop by Category:&nbsp;&nbsp;
                                <select class="form-control" style={{ width: '175px', display: 'inline-flex' }} required>
                                            <option value="0">All Categories</option>
                                            <option value="1">XXL</option>
                                            <option value="0">XL</option>
                                            <option value="1">L</option>
                                            <option value="0">M</option>
                                            <option value="1">S</option>
                                        </select>
                                    </td>
                                </div>
                                <div class="form-group">
                                    <td style={{ paddingLeft: '50px' }}>Sort by:&nbsp;&nbsp;
                        <select class="form-control" style={{ width: '175px', display: 'inline-flex' }} onChange={this.handlechangeSorting} value={this.state.sort}  >
                                            <option value="">Select</option>
                                            <option value="lowest" >Price Low to High</option>
                                            <option value="highest" >A-Z</option>
                                        </select>
                                    </td>
                                </div>
                            </div>
                        </tr>
                    </table><br />
                    <div style={{ display: 'inline-block' }}>
                        {
                            <table>
                                <tr>
                                    <td>
                                        <Product products1={this.state.products1} count={this.props.users.length} handleChange={this.handleChange} hideComponent={this.hideComponent} handleAddToCart={this.handleAddToCart} />
                                    </td>
                                </tr><br /><br />
                                <tr>
                                    <div class="container" style={{ textAlign: 'right', color: 'red', fontSize: "25px" }}>
                                        <i type='button' class="shopping cart icon"></i>
                                    </div>
                                </tr>
                            </table>
                        }                  </div>
                </div>

                <div>
                    {this.state.showHideDemo1 ? <Choose2 message={this.state.message} /> : null}

                </div>

                {/* <Choose2 /> */}
            </div>
        );
    }

}
const mapStateToProps = (state = null) => {
    return {
        users: state.users,
        activeUser: state.activeUser
    };
}
// const matchDispatchToProps = (dispatch) => {
//     return bindActionCreators({selectUser: selectUser}, dispatch);
// }

export default connect(mapStateToProps, { selectUser: selectUser })(Choose1);
