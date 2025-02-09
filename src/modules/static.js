export function renderStatic() {
  const body = document.querySelector('body');
  const staticContent = `
      <div class="container">
      <h1>Weather Forecast</h1>
      <form>
        <div class="search-bar">
        <div class="input-container">
            
            <input type="text" id="city" placeholder="Choose city" required />  
            <label for="city" class="tooltip">test</label> 
        </div>
        <button type="button" id="submit-button">Search</button>
        </div>
      </form>
      
    </div>
    <div class="weather-container hidden"></div>`;
  body.innerHTML = '';
  body.innerHTML = staticContent;
}
