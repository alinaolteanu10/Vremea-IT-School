// decalcaram functia care o sa ne faca predictia pentru vreme entru urmatoarele 5 zile, apelul functiei se va face
// in fisierul Choose-location.js si in index.js
function displayWeatherForecast(city) {
    // generam linkul serverului catre care trebuie sa facem call-ul, pe baza orasului
    const forecastEndpoint = getForecastEndpoint(city);

// inainte sa facem call-ul catre server si ca sa putem sa afisam noile inf in html trebuiesa selectam elementul de interes
let weatherForecastContainer = document.querySelector('.weather-forecast');
// stergem de pe ecran datele vechi
    weatherForecastContainer.innerHTML='';
        fetch(forecastEndpoint)
            .then((response) => response.json())
            .then((data) => {
        //  din datee venite de la openweather api noi o sa pastram doar proprietatea list(deoarece ea contine predictia vremii pe urm 
        // zile) care este un array
        const {list} = data;
        // avem nevoie de un obiect in care sa grupam predictiile pe zile
        const daysMap ={};
        // iteram prin cele 40 de predictii primite de la server pe care le gasim in variabila list
        list.forEach((element) => {
            // extragem prop dt de pe elementul iterat
            const {dt} = element;
            // folosim functia getDayOfTheweek din utilitarul date.js pt a ttransforma data in:luni,marti,....
            const day = getDayOfTheWeek(dt);
            // daca adeja ave ziua saptamanii in obiectul daysMap atunci ii adaugam o noua predictie de vreme
            // (adica obiectul peste care iteram:element)
            if(daysMap[day]){
                daysMap[day].push(element);

            } else {
                // altfel ziua saptamanii nu exista in oboiectul daysMap atunci il adaugam impreuna cu noua predictie
                // (adica obiectul curent peste care iteram : element)
                daysMap[day] = [element]
                }
        });
        // parcurgem cu ajutorul for..in continutul din obiectul daysMap- cheile sunt zilele saptamanii pt care o sa predictiile
        for(key in daysMap){
            // afisam ziua saptamanii pe ecran- o inseram in html
            weatherForecastContainer.innerHTML += `
            <h3 class="text-primary">${key}</h3>`;
            let daysPredictions = daysMap[key];
            // pentru fiecare element (predictie dintr-o zi ) extragem datele necesare
            daysPredictions.forEach((element) => {
                const {dt, main, weather} = element;
                // formatam ora folosind functia deja creata de noi, numita getHour
                const hour = getHour(dt);
                // rotunjim temperaturile
                const temperature = Math.round(main.temp);
                const realFeel = Math.round(main.feels_like);
                // ne extragm descrierea - o luam de pe obiectul weather care atentie , este un  array
                const weatherDescription = weather[0].description;
                // ne extragem icontita pe care o formataam cu functia deja creata de noi getWeatherIcon
                const weatherIcon = getWeatherIcon(weather[0].icon);
                // console.log(hour, temperature, realFeel, weatherDescription, weatherIcon);
                // afisam pe ecran-inseram n htlm toate informatiile de mai sus
                weatherForecastContainer.innerHTML += `
                    <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded
                    p-3 mb-3">
                        <div>${hour}</div>
                        <div><img src="${weatherIcon}" alt="weather icon"></div>
                        <div class="fs-3"><strong>${temperature}°C</strong></div>
                        <div>${weatherDescription}</div>
                        <div class="real-feel">Real feel:<strong>${realFeel}°C</strong></div>

                    </div>
                `

            })
        }
        })
} 