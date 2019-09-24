import {call, put, takeLatest} from 'redux-saga/effects';
import * as types from '../utils/Consts';
import Review from '../models/Review';
import { getReviews } from '../services/Api';

function* requestReviews({}) {
  try {
    let data = yield call(getReviews);
    data = data.map(review => new Review(review));
    yield put({type: types.FETCH_REVIEWS_SUCCESS, data});
  } catch (error) {
    console.log(error);
    yield put({type: types.FETCH_REVIEWS_FAIL, error});
  }
}

export default function* reviewsSagas() {
  yield takeLatest(types.FETCH_REVIEWS, requestReviews);
}
