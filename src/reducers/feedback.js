import { STORE_FEEDBACK, CLEAR_FEEDBACK } from '../actions/feedback.js';

const initialStore = [];

const feedbackReducer = (store = initialStore, action) => {
	switch(action.type) {
		case STORE_FEEDBACK: {
			let newStore = JSON.parse(JSON.stringify(store));

			newStore.push({
				email: action.email,
				username: action.username,
				score: action.score,
				feedback: action.feedback,
			});

			return newStore;
		}

		case CLEAR_FEEDBACK:
			return initialStore;

		default:
			return store;
	}
}

export default feedbackReducer;