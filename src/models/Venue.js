export default class Venue {
  constructor({
    id,
    name,
    coordinates,
    location,
    image_url,
    rating,
    review_count,
    phone,
    url,
    is_closed,
  }) {
    this.id = id;
    this.name = name;
    this.coordinates = coordinates;
    this.location = location;
    this.imageUrl = image_url;
    this.review = {
      rating,
      review_count,
    };
    this.phone = phone;
    this.url = url;
    this.isClosed = is_closed;
  }
}
