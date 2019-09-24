import * as types from './utils/Consts';

export function fetchVenues() {
  return {type: types.FETCH_VENUES};
}
export function fetchReviews() {
  return {type: types.FETCH_REVIEWS};
}
