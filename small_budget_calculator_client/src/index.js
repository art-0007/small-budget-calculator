import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'


import App from './components/App';
import { rootReducer } from './redux/reducers/rootReducer'
import { BrowserRouter as Router } from 'react-router-dom'
import { forbiddenWordsMiddleware } from './redux/middleware'
import {sagaWatcher} from './redux/sagas'

const saga = createSagaMiddleware()
const middleware = [thunk, logger, forbiddenWordsMiddleware, saga];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
  )

  saga.run(sagaWatcher)

  const app = (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>   
    </Provider>
  )

  ReactDOM.render(app, document.getElementById('root'))   

