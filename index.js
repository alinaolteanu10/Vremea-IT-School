//  de aici va pleca toata functionalitatea noastra

const currentCityTag = document.querySelector(".current-city");
// daca nu avem salavt in localstorage nici un oras atunci salvam in localsstorage ca default Bucuresti
// asta facem pt ca vrem sa persistam ce alege userul din drop downul cu orase
// 1. extragem ce este in local storage dupa cheia city
     let currentCity = localStorage.getItem("city");
    //  daca nu avem salvvat nici o val pt local storage atunci o setam cu setitem
    if(!currentCity){
        localStorage.setItem("city","București");
        currentCity = "București";
    }
// actualizam tagul sa afiseze valoarea din local storage
currentCityTag.innerHTML = currentCity;
// affisam vremea curenta direct cand intram pe pagina
displayCurrentWeather(currentCity);
// afisam si prognoza pt urm 5 zile 
displayWeatherForecast(currentCity);
const scrollToTopButton = document.querySelector(".ScrollToTop");

scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", function () {
  if (window.scrollY > innerHeight/2) {
    scrollToTopButton.style.visibility = "visible";
  } else {
    scrollToTopButton.style.visibility = "hidden";
  }
});
