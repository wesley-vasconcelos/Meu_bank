import {createStore, applyMiddleware} from 'redux'
import {createLogicMiddleware} from 'redux-logic'
import logics from './logics'
import rootReducer from './rootReducer'
const store = createStore(rootReducer, applyMiddleware(createLogicMiddleware(logics)))


export default store