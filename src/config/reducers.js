import { combineReducers } from 'redux';

import loginPageReducers from '../containers/loginPage/loginPage.reducers';
import schedulePageReducers from '../containers/schedulePage/schedulePage.reducers';
import scriptPageReducers from '../containers/scriptPage/scriptPage.reducers';
import filesPageReducers from '../containers/filesPage/filesPage.reducers';

// Root Reducer...
const Reducers = combineReducers({
    loginPageReducers,
    scriptPageReducers,
    filesPageReducers,
    schedulePageReducers
});

export default Reducers;
