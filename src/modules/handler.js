// this function will get only the current day data that we need for our web application
export function handleData(data) {
  const handledData = {};
  handledData.name = data.address;
  handledData.temp = data.currentConditions.temp;
  handledData.feelsLike = data.currentConditions.feelslike;
  handledData.minTemp = data.days['0'].tempmin;
  handledData.maxTemp = data.days['0'].tempmax;
  handledData.condition = data.currentConditions.conditions;
  return handledData;
}

// handle the next seven days data for our web app
export function handleNextSevenDaysData(data) {
  const handledNextSevenDaysData = {};
  const days = 7;
  for (let i = 1; i <= days; i++) {
    // it starts at 1 because the days object number 0 is from the current day, and the current day is handled in the function above
    const minMaxTemp = {};
    minMaxTemp.minTemp = data.days[i].tempmin;
    minMaxTemp.maxTemp = data.days[i].tempmax;
    handledNextSevenDaysData[i] = minMaxTemp;
  }

  return handledNextSevenDaysData;
}
