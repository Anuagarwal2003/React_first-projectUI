import increaseNumber from './I&D';
import { combineReducers } from 'react-redux';
// import store from '../store';


// store.subscribe(() => console.log(store.getstate()));
const rootReducer = combineReducers (
    {
        increaseNumber
    });

    export default rootReducer;