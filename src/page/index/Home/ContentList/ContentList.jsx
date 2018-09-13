import React from 'react';
import './ContentList.scss';
import { connect } from 'react-redux';
import ListItem from './ListItem/ListItem.jsx';
import { getListData } from '../../actions/contentListAction.js';
/**
* @constructor <ContentList />
* @description 附近商家列表
*/

class ContentList extends React.Component {
	constructor(props) {
		super(props);
		this.fetchData();
	}

	fetchData() {
		this.props.dispatch(getListData())
	}

	renderItems() {
		let list = this.props.list;
		return list.map((item, index) => {
			return <ListItem key={index} itemData={item}></ListItem>
		})
	}

	render() {
		return (
			<div className="list-content">
				<h4 className="list-title">
					<span className="title-line"></span>
					<span>附近商家</span>
					<span className="title-line"></span>
				</h4>
				{this.renderItems()}	
			</div>
		);
	}
}


export default connect(
	state => ({
		list: state.contentListReducer.list
	})
)(ContentList);