export function temperatureToggle() {
  const slider = document.querySelector('.switch-slider');
  const celsiusText = document.querySelector('.switch-c');
  const fahrenheitText = document.querySelector('.switch-f');
  let temp;

  if (getComputedStyle(fahrenheitText).opacity === '0') {
    slider.style.transform = 'translateX(0px)';
    slider.style.background = '#ff6384';
    celsiusText.style.opacity = '0';
    fahrenheitText.style.opacity = '1';
    temp = 'farenheit';
  } else {
    slider.style.transform = 'translateX(36px)';
    slider.style.background = '#6c63ff';
    celsiusText.style.opacity = '1';
    fahrenheitText.style.opacity = '0';
    temp = 'celcius';
  }
  localStorage.setItem('temp', JSON.stringify(temp));
}
