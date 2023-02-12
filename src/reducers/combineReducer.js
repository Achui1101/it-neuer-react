import { combineReducers } from 'redux';
import authReducer from './auth';

// Diese Datei wird von Redux benutzt um alle Reducer zusammenzuführen 
// für den root Reducer
const rootReducer = combineReducers({
    auth: authReducer
})

export default rootReducer;