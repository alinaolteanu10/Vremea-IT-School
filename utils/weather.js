// pe baza unui cod de iconita primit de la open weather api noi o sa generam likul acesteia
function getWeatherIcon(iconCode) {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
// pe baza speed-ului primit de la openweather api care este in m/s noi o sa returnam km/h
function windToKmPerHour(meterPerSec) {
    return (meterPerSec * 3600) / 1000;
    

}
