import { createContext, useContext, useEffect, html, signal, effect, useSignal } from './preact.js';

const Mapping = createContext({});

export const getPosition = async (latitude, longitude) => {
    const data = { latitude, longitude };

    const latitude2 = useSignal(latitude);
    const longitude2 = useSignal(longitude);
    try {
      const res = await fetch(`https://api-bdc.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=bdc_2c06aa5a162b4ac2bf0310033e77abd6`);
      const json = await res.json();

      const city = json.city;

      Object.assign(data, {
        city,
        continent: json.continent,
        countryCode: json.countryCode,
        countryName: json.countryName,
        postCode: json.postCode
      });
    } catch (e) {
      console.error(e);
    };

    if (data.countryCode) {
      document.querySelector('#countryFlag').src = `https://flagcdn.com/w160/${(data.countryCode).toLowerCase()}.png`;
      document.querySelector('#countryName').textContent = data.countryName;
    } else {
      document.querySelector('#countryFlag').src = '';
      document.querySelector('#countryName').textContent = '';
    }
    if (latitude && longitude) {
      document.querySelector('#LatLong').textContent = `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
    }

    return data;
};

    
const earth = new WE.map('earth_div');
WE.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '© OpenStreetMap contributors'
}).addTo(earth);

var showInfo = async function(e) {
  await getPosition(e.latitude, e.longitude);
}
earth.on('click', showInfo);

export const getSomethingElse = Component => ({ children, ...props }) => {
  const location = useSignal(null);
  const weather = useSignal(null);

  // when coordinates change, fetch the new weather
  effect(() => {
    if (!location.value) {
      return;
    }
  });

  return html`
    <${Mapping.Provider} value=${{ location, weather }}>
      <${Component} ...${props}>${children}<//>
      <div id="side-panel">
        <h1>More Details:</h1>
        <p id="LatLong">${latitude2}, ${longitude2}</p>
        <image id="countryFlag"></image>
        <p id="countryName"></p>
      </div>
    <//>
  `;
};

export const useWeather = () => useContext(Mapping);