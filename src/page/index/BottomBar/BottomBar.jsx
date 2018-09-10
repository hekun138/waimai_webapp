import './BottomBar.scss';
import React from 'react';
import { connect } from 'react-redux';

import { changeTab } from '../actions/tabAction';
/**
* @constructor <BottomBar>
* @description 首页底部tab栏
*/

class BottomBar extends React.Component {
	constructor(props) {
		super(props)
	}

	changeTab(item) {
		this.props.dispatch(changeTab({
			activeKey: item.key
		}))
	}

	renderItem() {
		let tabs = this.props.tabs;

		return tabs.map((item, index) => {
			let cls = item.key + ' btn-item';
			if(item.key === this.props.activeKey){
				cls += ' active';
			}	
			return (
				<div key={index} className={cls} onClick={() => this.changeTab(item)}>
					<div className="tab-icon"></div>
					<div className="btn-name">{item.name}</div>
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
		tabs: state.tabReducer.tabs,
		activeKey: state.tabReducer.activeKey
	})
)(BottomBar);