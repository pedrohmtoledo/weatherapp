import './styles/static.css';
import './styles/searched.css';
import { renderStatic, renderStatictatic } from './modules/static.js';
import { getCityData } from './modules/search.js';

const city = 'Cuiaba';
// fetch(
//   `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=JFSVBDTHUDQT4CEEBXF8K56EY`,
//   { mode: 'cors' }
// )
//   .then((response) => { 4l53cwEYXAfym3VjjrAYqzyhNBZhuuJ7
//     return response.json();
//   })
//   .then((response) => {
//     console.log(response.address);
//   });
// console.log('hello');

// async function getGif() {
//   const gif = await fetch(
//     'https://api.giphy.com/v1/gifs/KG4PMQ0jyimywxNt8i?api_key=4l53cwEYXAfym3VjjrAYqzyhNBZhuuJ7&rating=g',
//     { mode: 'cors' }
//   );
//   const img = await gif.json();

//   const div = document.createElement('img');
//   const body = document.querySelector('body');
//   div.src = img.data.images.original.url;
//   body.appendChild(div);
// }
// renderStatic();

// const searchButton = document.querySelector('#submit-button');

// searchButton.addEventListener('click', () => {
//   const cityData = getCityData();
//   cityData.then((reponse) => displayCityData(response));
// });

let cityData = {};
async function getData(name) {
  const city = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?key=JFSVBDTHUDQT4CEEBXF8K56EY`,
    { mode: 'cors' }
  );
  cityData = await city.json();
  const cityinfo = handleNextSevenDaysData(cityData);

  console.log(cityinfo[1].minTemp);
}
getData(city);

function handleData(data) {
  const handledData = {};
  handledData.name = data.address;
  handledData.temp = data.currentConditions.temp;
  handledData.feelsLike = data.currentConditions.feelslike;
  handledData.minTemp = data.days['0'].tempmin;
  handledData.maxTemp = data.days['0'].tempmax;
  handledData.condition = data.currentConditions.conditions;
  return handledData;
}

function handleNextSevenDaysData(data) {
  const handledNextSevenDaysData = {};
  const days = 7;
  for (let i = 1; i <= days; i++) {
    const minMaxTemp = {};
    minMaxTemp.minTemp = data.days[i].tempmin;
    minMaxTemp.maxTemp = data.days[i].tempmax;
    handledNextSevenDaysData[i] = minMaxTemp;
  }

  return handledNextSevenDaysData;
}
