import React from 'react';
import ReactDOM from 'react-dom';
import feathers from '@feathersjs/feathers';
import transport from '@feathersjs/socketio-client';
import socketio from 'socket.io-client';
import { Provider } from 'react-redux';
import { createStore } from 'redux-saga-wrapper';
import { createFeathersActions } from 'redux-feathers';
import { notification } from 'antd';

import actions from './state/actions';
import initialState from './state/initialState';
import App from './containers/App';

import 'antd/dist/antd.css';

const feathersClient = feathers();
feathersClient.configure(transport(socketio(API_URL)));

const onFeathersError = error => notification.error({
  message: 'Backend call failed',
  description: error.toString(),
});

const store = createStore(initialState, {
  ...actions,
  ...createFeathersActions(feathersClient, onFeathersError),
});

const root = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
