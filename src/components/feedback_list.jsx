import React from 'react';
import { connect } from 'react-redux';

//actions
import { clearFeedback } from '../actions/feedback.js';

class FeedbackList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false
		};
	}

	render() {
		let array = [];

		for (let i = 0; i < this.props.feedback.length; i++) {
			array.push(
				<tr key={`line${i}`} className='row'>
					<td className='col'>{this.props.feedback[i].email}</td>
					<td className='col'>{this.props.feedback[i].username}</td>
					<td className='col'>{this.props.feedback[i].score}</td>
					<td className='col double'>{this.props.feedback[i].feedback}</td>
				</tr>
			);
		}

		if (this.state.show) {
			return (
				<div className = 'panel'>
					<button type='button' onClick={this.toggle.bind(this)} style={{height: '3em'}}>Hide</button>

					<div className='break' />

					<button type='button' onClick={this.confirm.bind(this)}>Clear</button>

					<table className='table'>
						<thead>
							<tr className='row'>
								<th className='col' style={{textAlign: 'left'}}>Emails</th>
								<th className='col' style={{textAlign: 'left'}}>Usernames</th>
								<th className='col' style={{textAlign: 'left'}}>Scores</th>
								<th className='col double' style={{textAlign: 'left'}}>Feedback</th>
							</tr>
						</thead>
						<tbody>
							{array}
						</tbody>
					</table>
				</div>
			);
		} else {
			return (
				<div className = 'panel'>
					<button type='button' onClick={this.toggle.bind(this)} style={{height: '3em'}}>Show</button>
				</div>
			);
		}
	}

	toggle() {
		this.setState({ show: !this.state.show });
	}

	confirm() {
		if (confirm("Are you sure you want to delete EVERYTHING?") && confirm("ARE YOU CERTAIN???")) {
			this.props.clear();
		}
	}
}

const mapStoreToProps = store => {
	return {
		feedback: store.feedback,
	}
};

const mapDispatchToProps = dispatch => {
	return {
		clear: () => dispatch(clearFeedback())
	}
};

export default connect(mapStoreToProps, mapDispatchToProps)(FeedbackList);