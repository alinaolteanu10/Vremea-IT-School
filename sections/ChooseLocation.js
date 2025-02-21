const bucharestButton = document.querySelector(".dropdown-menu .bucharest");
const timisoaraButton = document.querySelector(".dropdown-menu .timisoara");
const oradeaButton = document.querySelector(".dropdown-menu .oradea");
const aradButton = document.querySelector(".dropdown-menu .arad");
const sibiuButton = document.querySelector(".dropdown-menu .sibiu");
// adaugam event listnerii pt butoanele din drop-down
function updateCurrentCityName(city){
    // prima data selectam tag-ul de html care este dedicat afisarii orasului curent
    const currentCity = document.querySelector(".current-city");
    currentCity.innerHTML = city;
}
function updateWeather(city){
    // actualizam orasul in local storage
    localStorage.setItem("city", city);
    // actualizam orasul afisat pe ecran
    updateCurrentCityName(city);
    // afisam vremea cureta pt orasul selectat din drop-down
    displayCurrentWeather(city);
      // Reafisam prognoza pe 5 zile, pentru noul oras.
     displayWeatherForecast(city);

}


bucharestButton.addEventListener("click", function () {
    updateWeather("București");
  });
timisoaraButton.addEventListener("click", function () {
    updateWeather("Timișoara");
  });
  oradeaButton.addEventListener("click", function () {
    updateWeather("Oradea");
  });
  aradButton.addEventListener("click", function () {
    updateWeather("Arad");
  });
  sibiuButton.addEventListener("click", function () {
    updateWeather("Sibiu");
  });