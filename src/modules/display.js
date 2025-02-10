import { handleData, handleNextSevenDaysData } from './handler';
import { renderDynamic } from './dynamic';

export function displayCityData(data) {
  const input = document.querySelector('#city');
  input.value = '';
  const currentDayData = handleData(data);
  const nextSevenDaysData = handleNextSevenDaysData(data);
  renderDynamic(currentDayData, nextSevenDaysData);
}
