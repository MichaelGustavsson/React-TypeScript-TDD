export class ItemsModel {
  constructor(id, title, posterImage, releaseDate) {
    this.id = id;
    this.title = title;
    this.posterImage = posterImage;
    this.releaseDate = releaseDate;
  }
}

export class DetailsModel extends ItemsModel {
  constructor(
    id,
    title,
    posterImage,
    releaseDate,
    backgroundImage,
    genre,
    runtime
  ) {
    super(id, title, posterImage, releaseDate);

    this.backgroundImage = backgroundImage;
    this.genre = genre;
    this.runtime = runtime;
  }
}
