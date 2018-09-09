import { ADD_TODO } from '../actions/actionTypes.js';

const initState = {
	tabs: [
		{
			name: '首页',
			
		}
	]
};

const tabReducer = (state = initState, action) => {
	switch(action.type) {
		case ADD_TODO: 
			return addTodo(state, action);
		default:
			return state	
	}
}

export default tabReducer;