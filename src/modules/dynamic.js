export function renderDynamic(currentDay, nextSevenDays) {
  const container = document.querySelector('.weather-container');
  container.classList.remove('hidden');
  container.innerHTML = '';

  const name = document.createElement('h2');
  name.classList.add('city-name');
  name.textContent = currentDay.name;
  container.appendChild(name);

  const currentTemp = document.createElement('p');
  currentTemp.classList.add('current-temp');
  currentTemp.textContent = currentDay.temp.join('');
  container.appendChild(currentTemp);

  const weatherCondition = document.createElement('p');
  weatherCondition.classList.add('weather-condition');
  weatherCondition.textContent = currentDay.condition;
  container.appendChild(weatherCondition);

  const tempContainer = document.createElement('div');
  tempContainer.classList.add('temp-details');

  const currentMaxTemp = document.createElement('span');
  currentMaxTemp.textContent = `Max: ${currentDay.maxTemp.join('')}`;

  const currentMinTemp = document.createElement('span');
  currentMinTemp.textContent = `Min: ${currentDay.minTemp.join('')}`;

  const currentFeelsLike = document.createElement('span');
  currentFeelsLike.textContent = `Feels like: ${currentDay.feelsLike.join('')}`;

  tempContainer.append(currentMaxTemp, currentMinTemp, currentFeelsLike);
  container.appendChild(tempContainer);

  const nextSevenDaysContainer = document.createElement('div');
  nextSevenDaysContainer.classList.add('next-seven-days-container');

  for (const key in nextSevenDays) {
    const nextDayItem = document.createElement('div');
    nextDayItem.classList.add('next-day-item');

    const nextDayName = document.createElement('p');
    nextDayName.classList.add('next-day-name');
    const nextDayTemp = document.createElement('p');
    nextDayTemp.classList.add('next-day-temp');

    nextDayName.textContent = nextSevenDays[key].day;
    nextDayTemp.textContent = `Max: ${nextSevenDays[key].maxTemp.join(
      ''
    )} Min: ${nextSevenDays[key].minTemp.join('')}`;

    nextDayItem.append(nextDayName, nextDayTemp);
    nextSevenDaysContainer.appendChild(nextDayItem);
  }

  container.appendChild(nextSevenDaysContainer);
}
