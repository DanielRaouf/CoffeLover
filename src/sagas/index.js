import {fork, all} from 'redux-saga/effects';

import venuesSagas from './venues-sagas';

function* rootSaga() {
  yield all([fork(venuesSagas)]);
}

export default rootSaga;
