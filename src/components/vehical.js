import React, { Component } from 'react';

class Vehicles extends Component {	 
	render() {
		return (
			<div> Vehicles Child Component </div>
		);
	}
}

export default Vehicles;

//choose1:-//         products: [
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
//}}
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

	//render(){
		 // if (showHideDemo1){
        // 	title = <Choose2 />
        // }else{
        // 	title = "Hide Componenets";
		// }
		 {/* <ul>
                        {this.renderList()}
                    </ul> */}
//	}

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
	//card:-  {/* <Card.Group>
// 	<Card style={{ boxShadow: 'none' }}>
// 	<b>{this.props.users[0].first}</b>
// 	<Image src={this.props.users[0].image} alt={this.props.users[0].title} />
// 	<Card.Content>
// 		<Card.Header>MRP Rs. {this.props.users[0].price}</Card.Header>
// 		<Card.Description>
// 			<Button key={this.props.users[0].id} onClick={() => this.props.selectUser(this.props.users[0] && this.hideComponent())} color='red'>Add To Box</Button>
// 		</Card.Description>
// 	</Card.Content>
// 	<Card.Content extra>
// 	</Card.Content>
// </Card>
// <Card style={{ boxShadow: 'none' }}>
// 	<b>{this.props.users[1].first}</b>
// 	<Image src={this.props.users[1].image} alt={this.props.users[1].title} />
// 	<Card.Content>
// 		<Card.Header>MRP Rs. {this.props.users[1].price}</Card.Header>
// 		<Card.Description>
// 			<Button key={this.props.users[1].id} onClick={() => this.props.selectUser(this.props.users[1])} color='red'>Add To Box</Button>
// 		</Card.Description>
// 	</Card.Content>
// 	<Card.Content extra>
// 	</Card.Content>
// </Card>
// <Card style={{ boxShadow: 'none' }}>
// 	<b>{this.props.users[2].first}</b>
// 	<Image src={this.props.users[2].image} alt={this.props.users[2].title} />
// 	<Card.Content>
// 		<Card.Header>MRP Rs. {this.props.users[2].price}</Card.Header>
// 		<Card.Description>
// 			<Button key={this.props.users[2].id} onClick={() => this.props.selectUser(this.props.users[2])} color='red'>Add To Box</Button>
// 		</Card.Description>
// 	</Card.Content>
// 	<Card.Content extra>
// 	</Card.Content>
// </Card>
// <Card style={{ boxShadow: 'none' }}>
// 	<b>{this.props.users[3].first}</b>
// 	<Image src={this.props.users[3].image} alt={this.props.users[3].title} />
// 	<Card.Content>
// 		<Card.Header>MRP Rs. {this.props.users[3].price}</Card.Header>
// 		<Card.Description>
// 		<Button key={this.props.users[3].id} onClick={() => this.props.selectUser(this.props.users[3]) && this.hideComponent()} color='red'>{this.state.text}</Button>
// 		</Card.Description>
// 	</Card.Content>
// 	<Card.Content extra>
// 	</Card.Content>
// </Card> */}
{/* </Card.Group> */}

 {/* <Basket count={this.props.users.length} cartItems={this.state.cartItems}  /> */}

  {/* <p>UserDetail values!!</p>
                    <UserDetail /> */}
                    {/* {title} */}
                    {/* {
                        this.state.showHideDemo1 ? <Choose2 /> : <Choose1 />
					} */}
 {/* {showHideDemo1 && (
					<div>
						{/* {children} */}
					{/* </div> */}
					
//choose2:-nothing changes 

//Basket:-// const productItems = cartItems.map((product) => (
    //     <div key={product.id}>
    //         <div>
    //             <Card.Group>
    //                 <Card style={{ boxShadow: 'none' }}>
    //                     <b>{product.first}</b>
    //                     {/* <a href={product.id} onClick={(e) => this.props.handleAddToCart(e , product)}> */}
    //                     <Image src={product.image} alt={product.title}  />
    //                     {/* </a> */}
    //                     <Card.Content>
    //                         <Card.Header>MRP Rs. {product.price}</Card.Header>
    //                         <Card.Description>
    //                             <Button onClick={() => this.props.selectUser( product , this.props.hideComponent())}  color='red'>Add To Box</Button>
    //                             <Button key={product.id} onClick={this.props.handleAddToCart(product)}  color='red'>Add To Box1</Button>                    
    //                         </Card.Description>
    //                     </Card.Content>
    //                     <Card.Content extra>
    //                     </Card.Content>
    //                 </Card>
    //                 </Card.Group>
    //     </div>
    //         </div>
	// ));
	
	//user-details:-// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import util from './util'
// /*
//  * We need "if(!this.props.user)" because we set state to null by default
//  * */

// class UserDetail extends Component {
//     render() {
//         console.log('value',this.props.user)                                                                                                                                                    ;
//         if (!this.props.user) {
//             return (<div><h1>Select a user...</h1></div>);
//         }
//         return (
//             <div>
//                 <img src={this.props.user.image} style={{ width: '175px', height: '200px', border: '1px solid black' }} />
//                 <h2>{this.props.user.first} {this.props.user.price}</h2>
//                 <h3>Age: {this.props.user.age}</h3>
//                 <h3>Description: {this.props.user.description}</h3>
//             </div>
//         );
//     }
// }

// // "state.activeUser" is set in reducers/index.js
// function mapStateToProps(state) {
//     return {
//         user: state.activeUser
//     };
// }

// export default connect(mapStateToProps)(UserDetail);import React, { Component } from 'react';

//reducer:-

// const iState ={
//    // type: 'SET_VISIBILITY_FILTER1',
//     price:350,
//      name:'ram',
//     // name1:'poooja'
// } 
// const iState1 = {    
//     type: 'SET_VISIBILITY_FILTER',
//     name:'ram'
//   }
// const Reducer = (state=iState , action) =>{
//      switch (action.type) {
//     case 'SET_VISIBILITY_FILTER1':
//        // newState.price;
//       return         {
//           price: action.payload
          
//         }
//     case 'SET_VISIBILITY_FILTER':
// //        newState.name;
//   //      break;
//         return{
//             name: action.payload
//           }
//     default:
//       return state
//   }
//     // if(action.type === 'CHANGE_NAME')
//     // {
//     //     return{
//     //         // ...state,
//     //         price:action.payload
//     //     }
//     // }
//     // // console.log('hello', state.wishes);
//     // return state;
// }
// export default Reducer;   

//app.js:-      {/* <Choose2 />
     // <Choose3 /> */}
      {/* <Choose4 /> */}
      {/* <Parent /> */}
      {/* <Router />
      <Contact />
      <About /> */}
      {/* <Choose1 /> */}
      {/* <Choose2 />
      <Choose3 />
      <Choose4 /> */}
      
        {/* <Router>  
        <div> */}
      {/* <h1>React Router Example</h1>   */}
      {/* <ul>  
        <li>  
          <Link to="/" style={{color:'red'}} >Home</Link>  
        </li>  
        <li>  
          <Link to="/About" style={{color:'red'}}>About</Link>  
        </li>  
        <li>  
          <Link to="/contact" style={{color:'green'}}>Contact</Link>  
        </li>
        <li>  
          <Link to="/service" style={{color:'green'}}>Service</Link>  
        </li>  
      </ul>   */}
       {/* <Route exact path="/" component={Choose1} /> 
      <Route path="/About" component={Choose2} /> 
      <Route path="/contact" component={Choose3} />
      <Route path="/Service" component={Choose4} /> 
      <Redirect to="/"/> 
    </div>  
  </Router>  */}
  
   {/* <Router> 
  <div> 
      <h1>React Router Example</h1>  
      <ul>
        <li><Link to="/" >Router</Link></li>
        <li><Link to="/About" >About</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
      </ul>

      <Route  path="/" component={Router1} /> 
      <Route path="/contact" component={Contact} />  
      <Route path="/About" component={About} />  
    </div>  
  </Router>   */}
    //     <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Ram Soni
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
	//   </header> 
	
	//starting:- {/* <ToggleBox title="Show Vehicles">
		//		<Vehicles />
		//	</ToggleBox> */}
      {/* <Provider store={store}> */}
        {/* <Redux /> */}
        {/* <App /> */}
      {/* <Choose1 title="Show Vehicles"/> */}
        {/* </Provider> */}
        {/* <App1 /> */}