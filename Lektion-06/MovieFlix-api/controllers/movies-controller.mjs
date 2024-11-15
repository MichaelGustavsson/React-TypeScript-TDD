export const listMovies = async (req, res) => {
  const url = `${process.env.BASE_URL}/discover/movie?api_key=${process.env.API_KEY}&language=sv-SE`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const result = await response.json();
      res.status(200).json({ success: true, result: result });
      return;
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const findMovies = async (req, res) => {
  const param = req.params.id;
  const url = `${process.env.BASE_URL}/movie/${param}?api_key=${process.env.API_KEY}&language=sv-SE`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const result = await response.json();
      res.status(200).json({ success: true, result: result });
      return;
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
