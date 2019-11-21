import React from 'react';
import { connect } from 'react-redux';

//actions
import { storeFeedback } from '../actions/feedback.js';

//email validation
let emailExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class FeedbackForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			username: '',
			score: '',
			feedback: '',
		};
	}

	render() {
		return (
			<div className = 'panel'>
				<form className = 'table' onSubmit={this.submit.bind(this)}>

					<div className='break' />

					<div className='row'>
						<label htmlFor='email' className='col'>Email:</label>
						<input type='email' name='email' value={this.state.email} onChange={this.updateEmail.bind(this)} className='col' />
					</div>

					<div className='break' />

					<div className='row'>
						<label htmlFor='username' className='col'>Username:</label>
						<input type='text' name='username' value={this.state.username} onChange={this.updateUsername.bind(this)} className='col' />
					</div>

					<div className='break' />

					<div className='row'>
						<label htmlFor='score' className='col'>Score:</label>
						<input type='text' name='score' value={this.state.score} onChange={this.updateScore.bind(this)} className='col' />
					</div>

					<div className='break' />

					<div className='row'>
						<label htmlFor='feedback' className='col'>Feedback:</label>
						<input type='text' name='feedback' value={this.state.feedback} onChange={this.updateFeedback.bind(this)} className='col' />
					</div>

					<div className='break' />

					<button type='submit' style={{height: '3em'}}>Submit</button>
				</form>
			</div>
		);
	}

	submit(e) {
		e.preventDefault();

		if (!this.validateInput()) {
			alert('Invalid email');
			return;
		}

		this.props.submit(this.state.email, this.state.username, this.state.score, this.state.feedback);
	}

	validateInput() {
		return emailExpression.test(this.state.email);
	}

	updateEmail(evt) {
		this.setState({ email: evt.target.value });
	}

	updateUsername(evt) {
		this.setState({ username: evt.target.value });
	}

	updateScore(evt) {
		this.setState({ score: evt.target.value });
	}

	updateFeedback(evt) {
		this.setState({ feedback: evt.target.value });
	}
}

const mapStoreToProps = store => {
	return {
		//
	}
};

const mapDispatchToProps = dispatch => {
	return {
		submit: (email, username, score, feedback) => dispatch(storeFeedback(email, username, score, feedback))
	}
};

export default connect(mapStoreToProps, mapDispatchToProps)(FeedbackForm);