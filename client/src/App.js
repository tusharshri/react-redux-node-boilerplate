import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import allReducers from './reducers'
import {Provider} from 'react-redux'

const initialState = {};

const middleware = [thunk];

const store = createStore(
  allReducers, 
  initialState, 
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);



//---------------------------------

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Todos />
        </div>
      </Provider>
    );
  }
}

export default App;
