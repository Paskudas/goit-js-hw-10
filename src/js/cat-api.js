const API_KEY = 'live_3vXQRfUY7Uxv5L96slToGHu6zIfgjnAXXRObjq7ntvAChfIy5RUhuKQSotYEUw7t'; 
async function fetchApi(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': API_KEY,
      },
    });
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Request failed');
  }
}

// Получение списка пород
async function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';
  try {
    const breeds = await fetchApi(url);
    return breeds;
  } catch (error) {
    throw new Error('Failed to fetch breeds');
  }
}

// Получение информации о коте по породе
async function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  try {
    const [cat] = await fetchApi(url);
    return cat;
  } catch (error) {
    throw new Error('Failed to fetch cat by breed');
  }
}

export { fetchBreeds, fetchCatByBreed };