import './styles/static.css';
import './styles/searched.css';
import { renderStatic } from './modules/static.js';
import { setCitytoLocalStorage, getDataAndDisplay } from './modules/search.js';
import { temperatureToggle } from './modules/tempformat.js';

renderStatic();

const searchButton = document.querySelector('#submit-button');
const toggleButton = document.getElementById('unit-toggle');

toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  temperatureToggle();
  if (document.querySelector('h2')) {
    getDataAndDisplay();
  }
});

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  setCitytoLocalStorage();
  getDataAndDisplay();
});
