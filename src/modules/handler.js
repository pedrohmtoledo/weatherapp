import { getDay } from 'date-fns';

// this function will get only the current day data that we need for our web application
export function handleData(data) {
  const handledData = {};
  handledData.name = data.address;
  handledData.temp = getTemperatureFormat(data.currentConditions.temp);
  handledData.feelsLike = getTemperatureFormat(
    data.currentConditions.feelslike
  );
  handledData.minTemp = getTemperatureFormat(data.days['0'].tempmin);
  handledData.maxTemp = getTemperatureFormat(data.days['0'].tempmax);
  handledData.condition = data.currentConditions.conditions;
  handledData.icon = data.currentConditions.icon;
  return handledData;
}

// handle the next seven days data for our web app
export function handleNextSevenDaysData(data) {
  const handledNextSevenDaysData = {};
  const days = 7;
  for (let i = 1; i <= days; i++) {
    // it starts at 1 because the days object number 0 is from the current day, and the current day is handled in the function above
    const minMaxTemp = {};
    minMaxTemp.minTemp = getTemperatureFormat(data.days[i].tempmin);
    minMaxTemp.maxTemp = getTemperatureFormat(data.days[i].tempmax);
    minMaxTemp.day = numberToDay(getDay(data.days[i].datetime)); // get the day of the week
    minMaxTemp.icon = data.days[i].icon;
    handledNextSevenDaysData[i] = minMaxTemp;
  }

  return handledNextSevenDaysData;
}

function numberToDay(num) {
  let day;
  switch (num) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
  }
  return day;
}

function getTemperatureFormat(temp) {
  let temperature = 0;
  let symbol;
  const format = JSON.parse(localStorage.getItem('temp'));
  if (format === 'celcius') {
    temperature = Math.round(((temp - 32) * 5) / 9);
    symbol = '°C';
  } else {
    temperature = Math.round(temp);
    symbol = '°F';
  }
  return [temperature, symbol];
}
