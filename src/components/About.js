import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                Welcome About
                
            </div>
        );
    }
}

export default About;
// handleChangeSize = (e) => {
//     this.setState({sort: e.target.value});
//     this.listProduct();
// }
// listProduct =() =>{
//    this.setState(state => {
//        if(state.sort != ''){
//            state.this.props.users.sort((a,b) =>(state.sort==='lowest')?
//            (a.price < b.price?1:-1)
//            : (a.price > b.price?1:-1)) 
//        }else{
//            state.this.props.users.sort((a,b) => (a.id < b.id?1:-1));
//        }
//        return state.this.props.users;
//    })

// }    

//data:-{
    // {
//   "products": [
//     {
//       "id": 1,
//       "sku": 18644119330491312,
//       first: "Beard Oil | Almond & Thyme",
//       "description": "Sphynx Tie Dye Grey",
//       "availableSizes": ["X", "L", "XL", "XXL"],
//       "price": 10,
//       "isFreeShipping": true
//     },

//     {
//       "id": 2,
//       "sku": 11854078013954528,
//       "title": "Danger Knife Grey T-Shirt",
//       "description": "Danger Knife Grey",
//       "availableSizes": ["X", "M", "L"],
//       "price": 14.9,
//       "isFreeShipping": true
//     },

//     {
//       "id": 3,
//       "sku": 876661122392077,
//       "title": "White DGK Script Tee",
//       "description": "White DGK Script",
//       "availableSizes": ["X", "M", "L"],
//       "price": 14.9,
//       "isFreeShipping": true
//     },

//     {
//       "id": 4,
//       "sku": 9197907543445677,
//       "title": "Born On The Streets  T-Shirt",
//       "description": "Born On The Streets",
//       "availableSizes": ["XL"],
//       "price": 25.9,
//       "isFreeShipping": false
//     },

//     {
//       "id": 5,
//       "sku": 10547961582846888,
//       "title": "Tso 3D Short Sleeve T-Shirt A",
//       "description": "Tso 3D Short Sleeve",
//       "availableSizes": ["X", "L", "XL"],
//       "price": 10.9,
//       "isFreeShipping": false
//     },

//     {
//       "id": 6,
//       "sku": 6090484789343891,
//       "title": "Man Tie Dye Cinza Grey T-Shirt",
//       "description": "Man Tie Dye Cinza Grey",
//       "availableSizes": ["XL", "XXL"],
//       "price": 49.9,
//       "isFreeShipping": false
//     },

//     {
//       "id": 7,
//       "sku": 18532669286405342,
//       "title": "Crazy Monkey Black T-Shirt",
//       "description": "1977 Infantil",
//       "availableSizes": ["S"],
//       "style": "Preto com listras brancas",
//       "price": 22.5,
//       "isFreeShipping": true
//     },

//     {
//       "id": 8,
//       "sku": 5619496040738316,
//       "title": "Tso 3D Black T-Shirt",
//       "description": "",
//       "availableSizes": ["XL"],
//       "style": "Azul escuro",
//       "price": 18.7,
//       "isFreeShipping": false
//     },
//     {
//       "id": 9,
//       "sku": 11600983276356165,
//       "title": "Crazy Monkey Grey",
//       "description": "",
//       "availableSizes": ["L", "XL"],
//       "price": 134.9,
//       "isFreeShipping": true
//     }
//   ]
// }
//}

//basket:- {/* <div class="ui items">
//   <div class="item">
//   <div class="ui small image">
//     <img src={item.image} />
//   </div>
//   <div class="middle aligned content">
//     <div class="header">
//       {item.first}
//     </div>
//     <div class="description">
//       {item.price}
//     </div>
//   </div>
// </div>
// </div> */}
              {/* <div class="ui items" style={{paddingLeft:'20px'}}>
<div class="item">
  <a class="ui small image">
    <img src={item.image} />
  </a>
  <div class="content">
    <div class="description">
      {item.first}<br/>
      {item.price}
    </div>
  </div>
</div>
</div> */
              /* <b>{item.first}</b><br/><br/>
                              <b>{item.price}</b>
                              <Image src={item.image} style={{ width: '175px', height: '200px', border: '1px solid black' }}  /> */}