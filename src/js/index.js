import SlimSelect from 'slim-select'
import { Notify } from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

// При загрузке страницы выполняем запрос за коллекцией пород
document.addEventListener('DOMContentLoaded', async () => {
  try {
  loader.style.display = 'block';
  breedSelect.style.display = 'none';
  error.style.display = 'none';
  catInfo.style.display = 'none';

  const breeds = await fetchBreeds();

const breedOptions = breeds.map(breed => ({
  value: breed.id,
  text: breed.name
}));

new SlimSelect({
  select: breedSelect,
  data: breedOptions
});

loader.style.display = 'none';
breedSelect.style.display = 'block';
} catch (error) {
  loader.style.display = 'none';
  error.style.display = 'block';
  }
  });

// Обработчик изменения выбора породы
breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.value;

  loader.style.display = 'block';
  error.style.display = 'none';
  catInfo.style.display = 'none';

  fetchCatByBreed(selectedBreedId)
    .then(cat => {
      catInfo.innerHTML = `<div class="thumb">
        <img src="${cat.url}" alt="Cat Image" />
        </div><div class='description'><h1>${cat.breeds[0].name}</h1>
        <p class='description-text'>
        <span><b>Description: </b>${cat.breeds[0].description}</span>
      </p>        
      <p class='description-temperament'>
      <span><b>Temperament: </b>${cat.breeds[0].temperament}</span></p>
        </div>`;

      loader.style.display = 'none';
      catInfo.style.display = 'block';
    })
    .catch(() => {
      loader.style.display = 'none';
      error.style.display = 'block';
    });
});