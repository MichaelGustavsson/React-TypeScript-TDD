import { ItemsModel, DetailsModel } from '../models/ItemsModel.mjs';
import { fetchData } from '../utilities/httpClient.mjs';

export const listMovies = async (req, res) => {
  let { query, page = 1 } = req.query;

  if (page > 500) page = 500;

  try {
    if (query) {
      const result = await searchMovies(query, page);
      res.status(200).json(result);
      return;
    }
    const result = await fetchData('discover/movie', null, page);
    const items = [];

    result.results.map((item) => {
      items.push(
        new ItemsModel(item.id, item.title, item.poster_path, item.release_date)
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

export const findMovies = async (req, res) => {
  const param = req.params.id;

  try {
    const result = await fetchData(`movie/${param}`);

    const item = new DetailsModel(
      result.id,
      result.title,
      result.overview,
      result.poster_path,
      result.release_date,
      result.backdrop_path,
      result.genres,
      result.runtime,
      result.vote_average
    );

    res.status(200).json({ success: true, result: item });

    return;
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

const searchMovies = async (query, page) => {
  try {
    const result = await fetchData('search/movie', query, page);
    const items = [];

    result.results.map((item) => {
      items.push(
        new ItemsModel(item.id, item.title, item.poster_path, item.release_date)
      );
    });

    return {
      success: true,
      result: {
        pageNo: result.page,
        totalPages: result.total_pages,
        data: items,
      },
    };
  } catch (error) {
    throw new Error(error);
  }
};
