import { displayCityData } from './display';

// get the city data from the asyn function that handles fetching the city with api
export function getCityData() {
  const input = document.querySelector('#city').value.trim();

  return getData(input);
}

// fetch city from visual crossing api
async function getData(name) {
  try {
    const city = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?key=JFSVBDTHUDQT4CEEBXF8K56EY`,
      { mode: 'cors' }
    );

    if (!city.ok) {
      throw new Error(`The name of the city ${name} was not found`);
    }

    const cityData = await city.json();
    displayCityData(cityData);

    return cityData;
  } catch (error) {
    const input = document.getElementById('city');
    const label = document.querySelector('.tooltip');
    label.textContent = error.message;
    const inputContainer = input.parentElement;

    inputContainer.classList.add('error'); // Add error class to show tooltip (label)
  }
  return;
}
