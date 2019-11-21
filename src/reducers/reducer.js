import { combineReducers } from 'redux';
import feedbackReducer from './feedback.js';

//compile all reducers together
export default combineReducers({
	feedback: feedbackReducer,
});
