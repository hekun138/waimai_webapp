import React from 'react';
import { connect } from 'react-redux';
import BottomBar from '../BottomBar/BottomBar';
// import Home from '../Home/Home';
import Order from '../Order/Order';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {		
		return (
			<div>
				<Order /> 
				<BottomBar />
			</div>
		)
	}
}

export default connect(
	// state => ({
		
	// })
)(Main);