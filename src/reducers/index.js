import {combineReducers} from 'redux';
import venues from './venues-reducer';

const reducers = combineReducers({
  venues,
});

export default reducers;
