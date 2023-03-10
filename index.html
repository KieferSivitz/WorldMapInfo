<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Disclaimer: This code is all terrible, it was a hackathon. -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://www.webglearth.com/v2/api.js"></script>
    <link rel="stylesheet" href="index.css">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.png">
    <title>Country Identifier</title>
    <script>
      const makeNastyTableFromObject = (jsonObject, elementName) => {
        let tableString="<table><tr>"
        for(let prop in jsonObject){
          tableString+="<tr>"
            tableString+=`<td>${prop}</td>`
            if (typeof jsonObject[prop] === 'object') {

              tableString+=`<td>${JSON.stringify(jsonObject[prop], null, ' ')}</td>`
            } else {
              tableString+=`<td>${jsonObject[prop]}</td>`
            }
          tableString+="</tr>"
        }
        tableString+=`</table>`;
        tableString+=`&nbsp`;

        document.querySelector(elementName).innerHTML=tableString;
      }
      const getPosition = async (latitude, longitude) => {
        document.querySelector('#dataDump').innerHTML = '';
        const data = { };

        document.querySelector('#countryCoatLabel').textContent = '';
        document.querySelector('#countryCoat').src = '';
        document.querySelector('#jsonListLabel').textContent = '';
        document.querySelector('#jsonList').textContent = '';
        try {
          const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`);
          const json = await res.json();

          const administrativeObj = json.localityInfo.administrative.sort((a, b) => a.adminLevel - b.adminLevel || a.order - b.order).reverse().pop();
          const administrativeName = administrativeObj ? administrativeObj.name : '';
          const backupCountryCode = administrativeObj ? administrativeObj.isoCode : '';
          const informative = json.localityInfo.informative.sort((a, b) => a.order - b.order).pop().name;

          const countryCode = json.countryCode.length > 0 ? json.countryCode : backupCountryCode;
          const countryName = json.countryName.length > 0 ? json.countryName : administrativeName;
          let wikiData, json2;
          if (countryCode) {
            wikiData = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
            json2 = (await wikiData.json())[0];
          }

          Object.assign(data, {
            Continent: json.continent,
            CountryCode: countryCode,
            CountryName: countryName
          });

          let munny;
          let languages = '';
          let tld;
          if (json2) {
            let merged = { ...json, ...json2}
            document.querySelector('#jsonListLabel').textContent = 'Raw Data Dump';
            makeNastyTableFromObject(merged, '#jsonList');
            const capital = (json2?.capital?.length > 0) ? json2.capital[0] : '';
            if (json2.currencies) {
              Object.keys(json2.currencies).forEach((key) => {
                munny = `${key} - ${json2.currencies[key].name} - ${json2.currencies[key].symbol}`;
              });
            }
            if (json2.languages) {
              languages = Object.values(json2.languages).join(', ');
            }
            if (json2.tld) {
              tld = json2.tld.join(', ');
            }

            // Data for the first, clean table
            Object.assign(data, {
              Population : json2.population,
              DrivesOn : json2?.car?.side,
              Population : json2.population.toLocaleString(),
              Capital : capital,
              Currencies : munny,
              UNMember : json2.unMember,
              TLD: tld,
              NameForPeople: json2?.demonyms?.eng?.f,
              Languages: languages
            });
            if (data.CountryCode){
              makeNastyTableFromObject(data, '#dataDump');
            }
            if (json2.coatOfArms) {
              document.querySelector('#countryCoat').src = json2.coatOfArms?.svg || '';
              document.querySelector('#countryCoatLabel').textContent = 'Coat of Arms';
            }
          }
        } catch (e) {
          console.error(e);
        };

        if (data.CountryCode) {
          document.querySelector('#countryFlag').src = `https://flagcdn.com/w320/${(data.CountryCode).toLowerCase()}.png`;
          document.querySelector('#countryName').textContent = data.countryName;
        } else {
          document.querySelector('#countryFlag').src = './smiley.png';
          document.querySelector('#countryName').textContent = '';
        }
        if (latitude && longitude) {
          document.querySelector('#LatLong').textContent = `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
        }
        return data;
      };
      function initialize() {
        earth = new WE.map('earth_div', {});
        WE.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
          attribution: '© OpenStreetMap contributors'
        }).addTo(earth);

        var showInfo = async function(e) {
          await getPosition(e.latitude, e.longitude);
        }
        earth.on('click', showInfo);
      }
    </script>
  </head>
  <body onload="initialize()">
    <div id="earth_div">
      <h1 id="titleText">Click on a Country to Get More Information</h1>
    </div>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
      <div id="side-panel">
        <h1 id="moreDetails">More Information</h1>
        <p id="LatLong"></p>
        <input type="image" id="countryFlag"  src="smiley.png"  onclick="buttonClick()" />
        <p id="countryName"></p>
        <p id="dataDump"></p>
        <p id="countryCoatLabel"></p>
        <image id="countryCoat"></image>
        <p id="jsonListLabel"></p>
        <p id="jsonList"></p>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@latest/dist/confetti.browser.min.js"></script>
    <script>
        var count = 200;
        var defaults = {
          origin: { y: 0.7 }
        };

        function fire(particleRatio, opts) {
          confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
          }));
        }
        
        function buttonClick() {
          var duration = 15 * 1000;
          var animationEnd = Date.now() + duration;
          var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

          function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
          }

          var interval = setInterval(function() {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
              return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
          }, 250);
        }
    </script>
  </body>
</html>
