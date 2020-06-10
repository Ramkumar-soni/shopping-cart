
import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./Products";

class Evaii extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
            filteredProducts:[]
        }
    }

    componentWillMount(){
        fetch("http://localhost:8000/products").then(res => res.json())
        .then(data => this.setState({
            products:data,
            filteredProducts : data
        }));
    }

  render() {
      console.log('test',this.setState.products);
    return (
        <div className="container">
          <h1>E-commerce Shopping Cart Application</h1>
          <hr />
          <div className="row">
            <div className="col-md-8">
              {/* <Filter /> */}
              {/* <hr /> */}
              <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
            </div>
            {/* <div className="col-md-3">
 componentDidMount = () => {
        let arr = this.props.users
        // arr.sort((a, b) => b.id - a.id);
        // this.setState({ products1: arr });
    }
    changeSorting = (e) => {
        this.setState({ sortingVal: e.target.value });
        console.log(e.target.value);
        if (e.target.value !== '') {
            let arr = this.props.users
           // arr.sort();
           arr.sort((a,b) => (e.target.value ==='lowest')?
                     (a.price > b.price?1:-1):
                     (a.price < b.price?1:-1))
            this.setState({ products1: arr });
        } else {
            let arr = this.props.users
            arr.sort((a,b) => (a.id > b.id ?1:-1));
            //arr.sort((a, b) => a.price - b.price);
            this.setState({ products1: arr });
        }
    }

    handleAddToCart = ( products) =>{
        this.setState(state => {
            const cartItems = state.cartItems;
            let productAlreadyCart = false;
            cartItems.forEach(item => {
                if(item.id === products.id){
                    productAlreadyCart = true;
                    item.count++;
                }
            });
            if(!productAlreadyCart){
                cartItems.push({...products , count:1});
            }
            localStorage.setItem("cartItems",JSON.staringfy(cartItems));
            return cartItems;
        })
    }

              <Basket />
              <Copyright />
              choose2:-"/images/img22.webp"
              choose3:-"/images/img23.webp"
            </div> */}
          </div>
        </div>
    );
  }
}

export default Evaii;