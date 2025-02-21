// vom declara functia care ne cheama api-ul de la opneweather pt vremea curent si ne va afisa datele in pagina
// apelul pt functie se face d chooselOcation.js pe event listnerele deja adaugate pe butoanele idn drop down
function displayCurrentWeather (city) {
    // prima data ne generam likul catre care vom face call-ul
    const currentWeatherEndPoint = getCurrentWeatherEndpoint(city);
    fetch(currentWeatherEndPoint)
    .then((response)=> response.json ())
    .then((data) => {
        console.log(data);
        // vom extrage datele de interes de pe ce am primit de la api- care ne-a trimis raspunsul sub forma de obiect name, dt  main weather wind
        const { name, dt, main, weather, wind } = data;
        // functia get day of the weeek este un utilitar creat de noi
        const day = getDayOfTheWeek(dt);
        const hours = getHour(dt);
        const temperature = Math.round(main.temp);
        const realFeel = Math.round(main.feels_like);
        // atentie prorietatea weather este un array cu un singur element
        
        const weatherDescription = weather[0].description;
        const weatherIcon = getWeatherIcon(weather[0].icon);
        const windSpeed = Math.round(windToKmPerHour(wind.speed));
        console.log(windSpeed);
// afisam datele primite si formatate mai sus in pagina
        // [entru asta prima data va trebui sa scriem un selector de js care sa acceseze elementul de DOM
        const currentWeatherContainer = document.querySelector(".current-weather");
        // folosind prop inner html de pe variabila care a accesat elementul de dom -> inserram datele
        currentWeatherContainer.innerHTML = `
            <div class="px-3">
                <div class="fs-2 mb-2"><strong>${name}</strong></div>
                <div class="fs-4"><strong>${day}</strong>, ${hours}</div>
                <div class="d-flex align-items-center justify-content-center">
                    <strong class="fs-1">${temperature}°C</strong>
                    <img src="${weatherIcon}"/>
                </div>
            </div>
            <div class="px-3">
                <p class="fs-5">Real feel: <strong>${realFeel}°C</strong></p>
                <p class="fs-5 text-capitalize">${weatherDescription}</p>
                <p class="fs-5">Vant: <strong>${windSpeed} km/h</strong></p>
            </div>
        `;

    })}
   
