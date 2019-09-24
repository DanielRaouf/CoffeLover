export default class Review {
  constructor({
    user,
    text,
    time_created,
    rating,

  }) {
    this.user = user;
    this.text= text;
    this.time = time_created;
    this.rating = rating;

  }
}
