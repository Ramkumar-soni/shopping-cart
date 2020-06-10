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
    //         products: [
    //             {
    //                 //"Banana", "Orange", "Apple", "Mango"
    //                 id: 1,
    //                 name: "Beardo Oil",
    //                 price: 350
    //             },
    //             {
    //                 id: 2,
    //                 name: "Watch",
    //                 price: 1080
    //             },
    //             {
    //                 id: 3,
    //                 name: "T-Shirts",
    //                 price: 500
    //             },
    //             {
    //                 id: 4,
    //                 name: "Sunglasses",
    //                 price: 850
    //             },
    //             {
    //                 id: 5,
    //                 name: "indian",
    //                 price: 250
    //             },
    //             {
    //                 id: 6,
    //                 name: "Zebra",
    //                 price: 25000
    //             }
    //         ],
    //         sortingVal: 1
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
           arr.sort((a,b) => (e.target.value ==='lowest')?
                     (a.price > b.price?1:-1):
                     a.first.localeCompare(b.first));
            this.setState({ products1: [...arr] });
        } else {
            let arr = this.props.users
            // arr.sort((a,b) => a.first.localeCompare(b.first));
            arr.sort((a, b) => a.price < b.price?1:-1);
            this.setState({ products1: [...arr] });
        }
        return this.state.products1;
    }

    // componentDidMount = () => {
    //     let arr = this.state.products
    //     arr.sort((a, b) => b.price - a.price);
    //     this.setState({ products: arr });
    // }
    // changeSorting = (e) => {
    //     this.setState({ sortingVal: e.target.val });
    //     console.log(e.target.value);
    //     if (e.target.value == 0) {
    //         let arr = this.state.products
    //         arr.sort((a, b) => a.price - b.price);
    //         this.setState({ products: arr });
    //     } else {
    //         let arr = this.state.products
    //         arr.sort((a, b) => a.name - b.name);
    //         this.setState({ products: arr });
    //     }
    // }
    // componentDidMount = () => {
    //     let arr = this.props.users
    //     arr.sort((a, b) => b.id - a.id);
    //     this.setState({ products1: arr });
    // }
    // changeSorting = (e) => {
    //     this.setState({ sort: e.target.value });
    //     console.log(e.target.value);
    //     if (e.target.value !== '') {
    //         let arr = this.props.users
    //         //arr.sort();
    //        arr.sort((a,b) => (e.target.value ==='lowest')?
    //                  (a.price > b.price?1:-1):
    //                  (a.price < b.price?1:-1))
    //         this.setState({ products1: arr });
    //         console.log(this.state.products1);
    //     } else {
    //         let arr = this.props.users
    //         arr.sort((a,b) => (a.id > b.id ?1:-1));
    //        // arr.sort((a, b) => a.price - b.price);
    //         this.setState({ products1: arr });
    //         console.log(this.state.products1);
    //     }
    //     return {products1:this.state.products1};
    // }

    //:-finally
    // componentDidMount = () => {
    //     let arr = this.props.users
    //  //   arr.sort((a, b) => b.id - a.id);
    //     this.setState({ products1: arr });
    // }
    // changeSorting = (e) => {
    //     this.setState({ sort: e.target.value });
    //     this.listProduct();
    // }
    // listProduct = () => {
    //     this.setState(state => {
    //         if (state.sort !== '') {
    //             let arr = this.props.users
    //             arr.sort((a, b) => (state.sort === 'lowest') ?
    //                 (a.price < b.price ? 1 : -1)
    //                 : (a.price > b.price ? 1 : -1))
    //             this.setState({ products1: arr });
    //         } else {
    //             let arr = this.props.users
    //             arr.sort((a, b) => (a.id < b.id ? 1 : -1));
    //             this.setState({ products1: arr });
    //         }
    //         return this.state.products1;
    //     })

    // }

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
        // this.setState({
        //     show: true
        //})
        // this.setState({
        //     text:'Added Item'
        // })
        // this.props.history.push("/About");
    }
    // handleChangeSize = () =>{

    // }
    // let arr = this.props.users

    // handleAddToCart = (e) =>{
    //    // e.preventDefault();
    //     console.log('count',this.props.users.length);
    //   //  this.props.users.map((product) => (
    //     this.setState(state => {
    //         const cartItems = state.cartItems;
    //         let productAlreadyCart = false;
    //         cartItems.forEach(item => {
    //             if(item.id === this.props.activeUser.id){
    //                 productAlreadyCart = true;
    //                  item.count++
    //             }
    //         });
    //         if(!productAlreadyCart){
    //             cartItems.push({...this.props.activeUser , count: 1});
    //         }
    //         localStorage.setItem("cartItems",JSON.stringify(cartItems));
    //         // if(localStorage.getItem(cartItems)){
    //         //     this.setState({cartItems:(localStorage.getItem(cartItems))});
    //         //     }

    //         return cartItems;
    //     })
    //   //  ))
    // }

    //  componentDidMount = () => {
    //         let arr = this.props.users
    //         // arr.sort((a, b) => b.id - a.id);
    //          this.setState({ products1: arr });
    //     }


    // renderList() {
    //     return this.props.users.map((user) => {
    //         return (
    //             <Button
    //                 key={user.id}
    //                 onClick={() => this.props.selectUser(user)}
    //             >Added To!</Button>
    //         );
    //     });
    // }


    render() {
        console.log('shyam', this.state.products1);
        console.log('pooja', this.props.users[0].first);
        console.log('pooja12', this.props.activeUser);
        console.log('testing', this.props.users);
        var { children, title } = this.props;
        const { showHideDemo1 } = this.state;

        // if (showHideDemo1){
        // 	title = <Choose2 />
        // }else{
        // 	title = "Hide Componenets";
        // }
        return (
            <div class="">
                <div className="a1">
                    {/* <ul>
                        {this.renderList()}
                    </ul> */}
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
                                        {/* <div>
                                            {
                                                this.state.products1.map((data, index) => {
                                                    return (<div key={data.id}>
                                                        <div>Product name : {data.first}</div>
                                                        <div>Price : {data.price}</div>
                                                        <br></br></div>)
                                                })
                                            }
                                        </div> */}
                                    </td>
                                </div>
                            </div>
                        </tr>
                    </table><br />
                    <div style={{ display: 'inline-block' }}>
                        {/* class="container also used in div" */}
                        {<table>
                            <tr>
                                <td>
                                    <Product products1={this.state.products1} count={this.props.users.length} handleChange={this.handleChange} hideComponent={this.hideComponent} handleAddToCart={this.handleAddToCart} />
                                    {/* <Card.Group>
                                        <Card style={{ boxShadow: 'none' }}>
                                            <b>{this.props.users[0].first}</b>
                                            <Image src={this.props.users[0].image} alt={this.props.users[0].title} />
                                            <Card.Content>
                                                <Card.Header>MRP Rs. {this.props.users[0].price}</Card.Header>
                                                <Card.Description>
                                                    <Button key={this.props.users[0].id} onClick={() => this.props.selectUser(this.props.users[0] && this.hideComponent())} color='red'>Add To Box</Button>
                                                </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                            </Card.Content>
                                        </Card>
                                        <Card style={{ boxShadow: 'none' }}>
                                            <b>{this.props.users[1].first}</b>
                                            <Image src={this.props.users[1].image} alt={this.props.users[1].title} />
                                            <Card.Content>
                                                <Card.Header>MRP Rs. {this.props.users[1].price}</Card.Header>
                                                <Card.Description>
                                                    <Button key={this.props.users[1].id} onClick={() => this.props.selectUser(this.props.users[1])} color='red'>Add To Box</Button>
                                                </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                            </Card.Content>
                                        </Card>
                                        <Card style={{ boxShadow: 'none' }}>
                                            <b>{this.props.users[2].first}</b>
                                            <Image src={this.props.users[2].image} alt={this.props.users[2].title} />
                                            <Card.Content>
                                                <Card.Header>MRP Rs. {this.props.users[2].price}</Card.Header>
                                                <Card.Description>
                                                    <Button key={this.props.users[2].id} onClick={() => this.props.selectUser(this.props.users[2])} color='red'>Add To Box</Button>
                                                </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                            </Card.Content>
                                        </Card>
                                        <Card style={{ boxShadow: 'none' }}>
                                            <b>{this.props.users[3].first}</b>
                                            <Image src={this.props.users[3].image} alt={this.props.users[3].title} />
                                            <Card.Content>
                                                <Card.Header>MRP Rs. {this.props.users[3].price}</Card.Header>
                                                <Card.Description>
                                                <Button key={this.props.users[3].id} onClick={() => this.props.selectUser(this.props.users[3]) && this.hideComponent()} color='red'>{this.state.text}</Button>
                                                </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                            </Card.Content>
                                        </Card> */}
                                    {/* </Card.Group> */}
                                </td>
                            </tr><br /><br />
                            <tr>
                                {/* <Basket count={this.props.users.length} cartItems={this.state.cartItems}  /> */}
                                <div class="container" style={{ textAlign: 'right', color: 'red', fontSize: "25px" }}>
                                    <i type='button' class="shopping cart icon"></i>
                                </div>
                            </tr>
                        </table>
                        }                  </div>
                </div>

                <div>
                    {/* <p>UserDetail values!!</p>
                    <UserDetail /> */}
                    {/* {title} */}
                    {/* {
                        this.state.showHideDemo1 ? <Choose2 /> : <Choose1 />
                    } */}
                    {this.state.showHideDemo1 ? <Choose2 message={this.state.message} /> : null}
                    {/* {showHideDemo1 && (
					<div>
						{/* {children} */}
                    {/* </div> */}
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
