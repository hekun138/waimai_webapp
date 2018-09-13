import { LIST_DATA } from './actionTypes.js';
import axios from 'axios';

export const getListData = () => (dispatch) => {
	axios({
		method: 'get',
		url: '/json/list.json'
	}).then((res) => {
		dispatch({
			type: LIST_DATA,
			obj: res.data
		})
	})
}