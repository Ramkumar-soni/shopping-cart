import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import selectUser from './select_user'
import UserDetail from './user-detail'
// import util from './util'
// import Choose3 from './choose3';
import MyProvider from './provider';

class Products extends Component {

    render() {
        console.log("Products", this.props.products1);
        console.log("Counts", this.props.count);
        console.log("Products", this.props.hideComponent);
        const productItems = this.props.products1.map((product) => (
            <div key={product.id}>
                <div>
                    <Card.Group>
                        <Card style={{ boxShadow: 'none' }}>
                            <b>{product.first}</b>
                            <Image src={product.image} alt={product.title} />
                            <Card.Content>
                                <Card.Header>MRP Rs. {product.price}</Card.Header>
                                <Card.Description>
                                    <Button key={product.id} onClick={() => this.props.selectUser(product, this.props.hideComponent(), this.props.handleChange())} color='red'>Add To Box</Button>
                                    {/* <Button key={product.id} onClick={() => this.props.selectUser(product , this.props.handleAddToCart())}  color='red'>Add To Box1</Button>                     */}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </div>
            </div>
        ));
        return (
            <div className="row">{productItems}</div>

        );
    }
}
const mapStateToProps = (state = null) => {
    return {
        users: state.users,
        activeUser: state.activeUser
    };
}

export default connect(mapStateToProps, { selectUser: selectUser })(Products);