import React from 'react';
import './ListItem.scss';
import { connect } from 'react-redux';

/*
* @constructor <ListItem />
* @description 列表单个组件
*/

class ListItem extends React.Component {
	constructor(props) {
		super(props);
	}
	//渲染品牌
	renderBrand(data) {
		if(data.brand_type) {
			return <div className="brand brand-pin">品牌</div>
		}else {
			return <div className="brand brand-xin">新到</div>
		}
	}
	//渲染分数
	renderScore(data){
		let wm_poi_score = data.wm_poi_score || '';
		let score = wm_poi_score.toString();
		let scoreArray = score.split('.');
		//满星个数
		let fullStar = parseInt(scoreArray[0]);
		//半星个数
		let halfStar = parseInt(scoreArray[1] >= 5 ? 1 : 0);
		//0星个数
		let nullStar = 5 - fullStar - halfStar;
		let starjsx = [];
		//渲染满星jsx
		for(let i = 0; i < fullStar; i++) {
			starjsx.push(<div key={i + 'full'} className="star fullstar"></div>)
		} 
		//渲染半星jsx
		if(halfStar) {
			for(let j = 0; j < halfStar; j++) {
				starjsx.push(<div key={j + 'half'} className="star halfstar"></div>)
			}
		}
		//渲染0星jsx
		if(nullStar) {
			for(let k = 0; k < nullStar; k++) {
				starjsx.push(<div key={k + 'null'} className="star nullstar"></div>)
			}
		}
		return starjsx;
	}
	//月售数量渲染
	renderMonthNum(data) {
		let num = data.month_sale_num;
		//大于999采用999+
		if(num > 999) {
			return '999+';
		}
		return num;
	}
	//是否需要渲染美团专送flag
	renderMeituanFlag(data) {
		if(data.delivery_type) {
			return <div className="item-meituan-flag">美团专送</div>
		}
		return null;
	}
	//渲染商家活动
	renderOthers(data) {
		let array = data.discounts2;
		return array.map((item, index) => {
			return (
				<div key={index} className="other-info">
					<img src={item.icon_url} className="other-tag"/>
					<div className="other-content">{item.info}</div>
				</div>
			)	
		})
	}
	render() {
		let itemData = this.props.itemData;
		return (
			<div className="item-content scale-1px">
				<img className="item-img" src={itemData.pic_url}/>
				{this.renderBrand(itemData)}
				<div className="item-info-content">
					<p className="item-title">{itemData.name}</p>
					<div className="item-desc clearfix">
						<div className="item-score">{this.renderScore(itemData)}</div>
						<div className="item-count">月售{this.renderMonthNum(itemData)}</div>
						<div className="item-distance">&nbsp;{itemData.distance}</div>
						<div className="item-time">{itemData.mt_delivery_time}&nbsp;|</div>
					</div>
					<div className="item-price">
						<div className="item-pre-price">{itemData.min_price_tip}</div>
						{this.renderMeituanFlag(itemData)}
					</div>
					<div className="item-others">
						{this.renderOthers(itemData)}
					</div>
				</div>
			</div>
		)
	}
}

export default connect(

)(ListItem);