import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import FriendListApp from './FriendListApp';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default function App () {
  return (
    <div>
      <Provider store={store}>
        <FriendListApp />
      </Provider>
    </div>
  );
}
