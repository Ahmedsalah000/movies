
import { createStore ,applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { moviesReducer } from '../reducer/movieReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunk from 'redux-thunk'
//1-create store
export const store = configureStore(moviesReducer, applyMiddleware(thunk));