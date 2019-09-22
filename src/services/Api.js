const getVenues = () => {
  const venues = require('../data/Venue-search.json')
  if (venues) {
    return venues.businesses;
  }
  return [];
};

export {getVenues};
