import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Basket extends Component {
  render() {
    console.log("Counts", this.props.count);
    const { cartItems } = this.props;
    console.log("Caritems", cartItems);
    console.log("item", this.props.image);

    return (
      <div class='container'>
        <div style={{ textAlign: 'center', color: 'black', fontSize: "20px" }}>{cartItems.length === 0 ? "Basket is empty" : <div> You have {cartItems.length} Products in the basket</div>}</div><br />
        {cartItems.length > 0 &&
          <div style={{ color: 'black', fontSize: "15px", marginLeft: "190px" }}>
            {cartItems.map((item, index) => (
              <div key={index} value={index}>
                <table class="">
                  <tr>
                    <td style={{ padding: '10px' }}>
                      <img src={item.image} alt="" style={{ width: '175px', height: '175px', border: '1px solid black' }} />
                    </td>
                    <td style={{ textAlign: 'left', paddingLeft: '10px', paddingRight: '200px' }}>
                      <div>
                        {item.first}
                      </div>
                      <div>
                      &#8377;{item.price}<br />
                        <b style={{ color: 'red' }}>Added</b>

                      </div>
                    </td>
                  </tr>
                </table>

              </div>
            ))}
          </div>
        }

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.activeUser
  };
}
export default connect(mapStateToProps)(Basket);

// export default Basket;