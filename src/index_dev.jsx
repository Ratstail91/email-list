import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import DevTools from './dev_tools.jsx';
import App from './components/app.jsx';

import reducer from './reducers/reducer.js';

//persistence
let ITEM_NAME = 'rota_emails_v1.1';
let feedback = localStorage.getItem(ITEM_NAME);
feedback = feedback ? JSON.parse(feedback) : [];

var store = createStore(
	reducer,
	{ feedback: feedback }, //initial state
	compose(
		applyMiddleware(thunk),
		DevTools.instrument()
	)
);

//persistence
store.subscribe(() => {
	localStorage.setItem(ITEM_NAME, JSON.stringify(store.getState().feedback));
});

//start the process
ReactDOM.render(
	<Provider store={store}>
		<div>
			<App />
			<DevTools />
		</div>
	</Provider>,
	document.querySelector("#root")
);
