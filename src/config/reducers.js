import { combineReducers } from 'redux';
// import reduxActions from '../constants/reduxActions';
// import { defaultState /*, objectState, arrayState */} from '../constants/initialStates';
// import { requestState, successState, failureState } from '../constants/nextStates';

import loginPageReducers from '../containers/loginPage/loginPage.reducers';
import schedulePageReducers from '../containers/schedulePage/schedulePage.reducers';
//import mainHeaderReducers from '../containers/mainHeader/mainHeader.reducers';
import scriptPageReducers from '../containers/scriptPage/scriptPage.reducers';
import actorPageReducers from '../containers/actorPage/actorPage.reducers';

// Root Reducer...
const Reducers = combineReducers({
    loginPageReducers,
    scriptPageReducers,
    schedulePageReducers,
    actorPageReducers
});

export default Reducers;
