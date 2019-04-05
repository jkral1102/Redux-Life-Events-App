// Root Reducer ! import into store
// combines all reducers
import { combineReducers } from 'redux'
import eventReducer from './eventReducer.js'

// determines mapStateToProps properties - any data put in by the postReducer is called posts
//The combinedReducer calls every child reducer, and gathers their results into a single state object. - to pass to createStore
export default combineReducers({
    eventData: eventReducer
})