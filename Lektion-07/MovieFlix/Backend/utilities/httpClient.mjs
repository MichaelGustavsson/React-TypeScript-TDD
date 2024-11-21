export const fetchData = async (endpoint, query) => {
  let url;
  if (query) {
    url = `${process.env.BASE_URL}/${endpoint}?query=${query}&api_key=${process.env.API_KEY}`;
  } else {
    url = `${process.env.BASE_URL}/${endpoint}?api_key=${process.env.API_KEY}`;
  }

  try {
    const response = await fetch(url);

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error(
        `Det gick fel i fetchData: ${endpoint} - ${response.status} - ${response.statusText}`
      );
    }
  } catch (error) {
    console.log(error);
    throw new Error(`Ett fel inträffade i fetchData: ${error}`);
  }
};
