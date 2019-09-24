import {fork, all} from 'redux-saga/effects';

import venuesSagas from './venues-sagas';
import reviewsSagas from './reviews-sagas' ;
function* rootSaga() {
  yield all([fork(venuesSagas)]);
  yield all([fork(reviewsSagas)]);

}

export default rootSaga;
