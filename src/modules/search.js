import { displayCityData } from './display';

// get the searched city and add it to localStore
export function setCitytoLocalStorage() {
  const input = document.querySelector('#city').value.trim();
  localStorage.setItem('city', JSON.stringify(input));
}

// fetch city from visual crossing api
export async function getDataAndDisplay() {
  const name = JSON.parse(localStorage.getItem('city'));
  console.log(name);
  try {
    const city = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?key=JFSVBDTHUDQT4CEEBXF8K56EY`,
      { mode: 'cors' }
    );

    if (!city.ok) {
      throw new Error(`The name of the city ${name} was not found`);
    }

    const cityData = await city.json();
    console.log(cityData.currentConditions.icon);
    displayCityData(cityData); // call display function to display the data from search city on screen

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
