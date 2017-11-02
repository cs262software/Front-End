import { combineReducers } from 'redux';
import reduxActions from '../constants/reduxActions';
import { defaultState, objectState, arrayState } from '../constants/initialStates';
import { requestState, successState, failureState } from '../constants/nextStates';

//import mainHeaderReducers from '../containers/mainHeader/mainHeader.reducers';
import loginPageReducers from '../containers/loginPage/loginPage.reducers';
//import homePageReducers from '../containers/homePage/homePage.reducers';

// Root Reducer...

const Reducers = combineReducers({
    loginPageReducers
});

// const Reducers = {
//     //mainHeader: mainHeaderReducers,
//     loginPage: loginPageReducers
//     //homePage: homePageReducers
// };

export default Reducers
