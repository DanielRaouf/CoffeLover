import {combineReducers} from 'redux';
import venues from './venues-reducer';
import reviews from './reviews-reducer';


const reducers = combineReducers({
  venues,
  reviews,
});

export default reducers;
