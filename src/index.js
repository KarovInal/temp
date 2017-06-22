import React from 'react'
import {render} from 'react-dom'
import rootReducer from './reducers/index.js'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import getData from './actions/index.js'
import App from './containers/App'

var store = createStore(rootReducer, applyMiddleware(
    thunkMiddleware
));

store.dispatch(getData('Moscow'))

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)