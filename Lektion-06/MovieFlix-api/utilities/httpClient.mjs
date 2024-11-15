export const fetchData = async (endpoint) => {
  const url = `${process.env.BASE_URL}/${endpoint}?api_key=${process.env.API_KEY}&language=sv-SE`;

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
