import React, { Component } from 'react';
export default class GCARD extends Component {
    constructor(props) {
        super(props);

        // This state changes so the card is generated

        this.state = {
            change: [],
        }
        this.handel = this.handel.bind(this);
    }

    handel = (element) => {

        // This is the element which creates the card. 
        let components = this.state.change;

        element = <CardComponent data="Give a little detail about the thing's you like!"
            heading="Create Your Own Card" image="./owl.jpg" />

        components.push(element);

        this.setState({
            change: components
        });
    }

    render() {
        return (
            <div>
                <div className="form-div">
                    <div>
                        <p className="form-title">Create Your Own Card</p>
                        <hr />
                    </div>
                    <div>
                        <label className="form-label">Main Heading </label>
                        <input className="form-input" type="text" />
                        <br /><br />
                        <label className="form-label">Some Info</label>
                        <input className="form-input1" type="text" />
                        <br /><br />

                        {/* Just focus on the button */}

                        <button onClick={this.handel} className="form-btn">CREATE</button>
                    </div>
                </div>
                <div>
                    {this.state.change.map(comp => (comp))}
                </div>
            </div>
        );
    }
}