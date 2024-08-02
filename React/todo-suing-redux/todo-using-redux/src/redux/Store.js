import {configureStore} from '@reduxjs/toolkit'
import taskReducer from './reducer'

const preloadedState=window.__PRELOADED_STATE__;
const store=configureStore({
    reducer:{
        todos:taskReducer
    },
    preloadedState,
})

export default store
