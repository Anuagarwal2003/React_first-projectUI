 import { createstore } from 'react';
 import rootReducer from './reducers/index';
 

 const store = createstore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 export default store;