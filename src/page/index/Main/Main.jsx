import React from 'react';
import { connect } from 'react-redux';
import BottomBar from '../BottomBar/BottomBar';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<BottomBar />
			</div>
		)
	}
}

export default connect(
	// state => ({
		
	// })
)(Main);