// CONSTANTELE CARE STIM CA NU SE VOR SCHIBA nICIODATA IN PROIECTUL NOSTRU PUTEM SA LE PASTRAM CU
//  const iar denumirea lor poate fi scrisa uppercase-litere mari
// api keyurile sau tokenurile nu ar trebui sa stea intr-un fisier text, nu este sigur, aceste keyrui ar trebui
// sa stea pe un server dar in cazul nostru cum apiulde la open weahter este gratuit atunci e ok sa il tinnem asa
const API_KEY = "7da925a1a7e44123e220d3c8c2e265e4";

// construim linkurile (endpointurile)serverelor catre care vom face callurile ca sa primim date despre vreme
function getCurrentWeatherEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
    // cand se foloseste? dupa url inseamna ca avem de aface cu query params(query string)- asta inseamna ca api ul
    //  va lua in considerare acei parametrii pt a ne intoarce date in functie de ei
    // noi avem urm query param :  1 q= folosit pt city
    // 2 lang= este folosit pentru a-i spune api ului sa ne intoarca datele in limba romana
    //3 unit 
    // 4 app id

}
function getForecastEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;

}