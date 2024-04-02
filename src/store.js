// src/store.js

import { createStore } from 'redux';
import rootReducer from './reducers';

// Load state from local storage
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const store = createStore(rootReducer, persistedState);

// Save state to local storage on each Redux store update
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
