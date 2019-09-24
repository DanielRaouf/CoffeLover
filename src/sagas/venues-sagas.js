import {call, put, takeLatest} from 'redux-saga/effects';
import * as types from '../utils/Consts';
import Venue from '../models/Venue';
import { getVenues } from '../services/Api';

function* requestVenues({}) {
  try {
    let data = yield call(getVenues);
    data = data.map(venue => new Venue(venue));
    yield put({type: types.FETCH_VENUES_SUCCESS, data});
  } catch (error) {
    console.log(error);
    yield put({type: types.FETCH_VENUES_FAIL, error});
  }
}

export default function* venuesSagas() {
  yield takeLatest(types.FETCH_VENUES, requestVenues);
}
