import './BottomBar.scss';
import React from 'react';
import { connect } from 'react-redux';

/**
* @constructor <BottomBar>
* @description 首页底部tab栏
*/

class BottomBar extends React.Component {
	constructor(props) {
		super(props)
	}

	renderItem() {
		let tabs = ['首页','订单','我的'];

		return tabs.map((item, index) => {
			return (
				<div key={index} className="btn-item">
					<div className="tab-icon"></div>
					<div className="btn-name">{item}</div>
				</div>
			)
		})
	}

	render() {
		return (
			<div className="bottom-bar">
				{this.renderItem()}
			</div>
		)	
	}
}

export default connect(
	state => ({
		
	})
)(BottomBar);