import { ItemsModel, DetailsModel } from '../models/ItemsModel.mjs';
import { fetchData } from '../utilities/httpClient.mjs';

export const listShows = async (req, res) => {
  try {
    const items = [];
    const result = await fetchData('discover/tv');
    // projecering av datat...
    result.results.map((item) => {
      items.push(
        new ItemsModel(
          item.id,
          item.name,
          item.poster_path,
          item.first_air_date
        )
      );
    });
    res.status(200).json({
      success: true,
      result: {
        pageNo: result.page,
        totalPages: result.total_pages,
        data: items,
      },
    });
    return;
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const findShow = async (req, res) => {
  const param = req.params.id;

  try {
    const result = await fetchData(`tv/${param}`);

    const item = new DetailsModel(
      result.id,
      result.name,
      result.overview,
      result.poster_path,
      result.first_air_date,
      result.backdrop_path,
      result.genres,
      result.number_of_episodes,
      result.vote_average
    );

    res.status(200).json({ success: true, result: item });
    return;
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
