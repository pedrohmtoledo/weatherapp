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
    const cityData = await city.json();
    return cityData;
  } catch (error) {
    console.log(error);
  }
}
