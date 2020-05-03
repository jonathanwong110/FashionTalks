import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import manageUsers from './reducers/manageUsers.js'
import managePosts from './reducers/managePosts.js'
import manageComments from './reducers/manageComments.js'
import manageSections from './reducers/manageSections.js'
import thunk from 'redux-thunk'
import manageLogin from './reducers/manageLogin.js'
import manageCurrentUser from './reducers/manageCurrentUser.js'

const reducer = combineReducers({
    users: manageUsers,
    posts: managePosts,
    comments: manageComments,
    sections: manageSections,
    manageLogin,
    manageCurrentUser
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store