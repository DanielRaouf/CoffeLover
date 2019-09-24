const getVenues = () => {
  const venues = require('../data/Venue-search.json')
  if (venues) {
    return venues.businesses;
  }
  return [];
};

const getReviews = () => {
  const reviews = require('../data/Reviews.json')

  return reviews.reviews;
};

export {getVenues,getReviews};
