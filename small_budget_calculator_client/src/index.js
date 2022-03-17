import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App';
import { rootReducer } from './redux/reducers/rootReducer'
import { forbiddenWordsMiddleware } from './redux/middleware'

const middleware = [thunk, logger, forbiddenWordsMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
  )

  const app = (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>   
    </Provider>
  )

  ReactDOM.render(app, document.getElementById('root'))   

