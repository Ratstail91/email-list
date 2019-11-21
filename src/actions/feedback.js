export const STORE_FEEDBACK = 'STORE_FEEDBACK';
export const CLEAR_FEEDBACK = 'CLEAR_FEEDBACK';

export const storeFeedback = (email, username, score, feedback) => {
	return {
		type: STORE_FEEDBACK,
		email: email,
		username: username,
		score: score,
		feedback: feedback,
	};
}

export const clearFeedback = () => {
	return {
		type: CLEAR_FEEDBACK
	};
}