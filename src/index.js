import './styles/static.css';
import './styles/searched.css';
import { renderStatic, renderStatictatic } from './modules/static.js';
import { getCityData } from './modules/search.js';
import { getDay } from 'date-fns';
import { displayCityData } from './modules/display.js';

renderStatic();

const searchButton = document.querySelector('#submit-button');

searchButton.addEventListener('click', () => {
  const cityData = getCityData();
  const input = document.querySelector('#city');
  input.value = '';
});
