export function renderStatic() {
  const body = document.querySelector('body');
  const staticContent = `
      <div class="container">
      <h1>Weather Forecast</h1>
      <form>
        <div class="search-bar">
          <input type="text" id="city" placeholder="Choose city" required />
          <button type="button" id="submit-button">Search</button>
        </div>
      </form>
    </div>`;
  body.innerHTML = '';
  body.innerHTML = staticContent;
}
