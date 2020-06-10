import React, { Component } from 'react';

class ToggleBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			opened: false,
		};
		this.toggleBox = this.toggleBox.bind(this);
	}
  
	toggleBox() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}
  
	render() {
		var { title, children } = this.props;
		const { opened } = this.state;

		if (opened){
			title ='Hide Vehicles';
		}else{
			title ='Show Vehicles123456';
		}

		return (
			<div className="box">
				<div className="boxTitle" >
					<button onClick={this.toggleBox}>Click me!</button>
					{title}
				</div>
				{opened && (					
					<div class="boxContent">
						{children}
					</div>
				)}
			</div>
		);
	}
}

export default ToggleBox;
