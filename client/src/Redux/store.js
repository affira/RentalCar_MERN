//, applyMiddleware,  } from 'redux';
//import { applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { carsReducer } from './reducers/carsReducer';
import {configureStore, applyMiddleware, combineReducers} from '@reduxjs/toolkit'
import { alertsReducer } from './reducers/alertsReducer';
import { bookingsReducer } from './reducers/bookingsReducer';



const composeEnhancers = composeWithDevTools({

});

const rootReducer = combineReducers({
    carsReducer,
    alertsReducer,
    bookingsReducer,
})

const store = configureStore(
    {reducer: rootReducer},
    composeEnhancers(
        applyMiddleware(thunk)

    )
);

export default store