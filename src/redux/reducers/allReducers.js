import { combineReducers } from 'redux';

import userReducer from './UserReducer';
import pgReducer from './PgReducer';

const reducers = combineReducers({
    userReducer,
    pgReducer,
});

export default reducers;