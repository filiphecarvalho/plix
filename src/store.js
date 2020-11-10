import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Framework7StateKernel, framework7Reducer, syncFramework7WithStore } from 'framework7-redux';

import thunk from 'redux-thunk';

export const framework7StateKernel = new Framework7StateKernel();

export const store = createStore(
    combineReducers({
        framework7: framework7Reducer
    }),
    compose(applyMiddleware(thunk))
);

syncFramework7WithStore(store, framework7StateKernel);