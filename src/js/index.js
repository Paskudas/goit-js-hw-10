import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

// При загрузке страницы выполняем запрос за коллекцией пород
document.addEventListener('DOMContentLoaded', () => {
  loader.style.display = 'block';
  breedSelect.style.display = 'none';
  error.style.display = 'none';
  catInfo.style.display = 'none';

  fetchBreeds()
    .then(breeds => {
      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
      });

      loader.style.display = 'none';
      breedSelect.style.display = 'block';
    })
    .catch(() => {
      loader.style.display = 'none';
      error.style.display = 'block';
    });
});

// Обработчик изменения выбора породы
breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.value;

  loader.style.display = 'block';
  error.style.display = 'none';
  catInfo.style.display = 'none';

  fetchCatByBreed(selectedBreedId)
    .then(cat => {
      catInfo.innerHTML = `
        <img src="${cat.url}" alt="Cat Image" />
        <h2>${cat.breeds[0].name}</h2>
        <p>${cat.breeds[0].description}</p>
        <p>Temperament: ${cat.breeds[0].temperament}</p>
      `;

      loader.style.display = 'none';
      catInfo.style.display = 'block';
    })
    .catch(() => {
      loader.style.display = 'none';
      error.style.display = 'block';
    });
});