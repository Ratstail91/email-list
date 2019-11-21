import React from 'react';

import FeedbackForm from './feedback_form.jsx';
import FeedbackList from './feedback_list.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className = 'central'>
				<div className = 'page'>
					<FeedbackForm />
					<FeedbackList />
				</div>
			</div>
		);
	}
}