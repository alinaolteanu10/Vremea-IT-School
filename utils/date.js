function getDayOfTheWeek(utcDate){
    // pt a crea o data dintr-o valoare utc trb sa o inmultim cu 1000
    const date = new Date(utcDate * 1000);
    //  o sa extragem ziua saptamanii sub forma de index
    const dayIndex = date.getDay();
    console.log(dayIndex);

switch (dayIndex) {
    case 0:
        dayName = "Duminica";
        break;
    case 1:
        dayName = "Luni";
        break;
    case 2:
        dayName = "Marti";
        break;
    case 3:
        dayName = "Miercuri";
        break;
    case 4:
        dayName = "Joi";
        break;
    case 5:
        dayName = "Vineri";
        break;
    case 6:
        dayName = "Sambata";
        break;
        default:
        // afisam o eroare data indexul nu este valid 
        throw new Error("Index-ul zilei trebuie sa fie intre 0 si 6");

}

// returnam ziua echivalenta indexului

return dayName;
}
function getHour(utcDate) {
    // pt a crea o data pornind de la o valoare in format utc trebuie sa o inmultim cu 1000
    const date = new Date(utcDate * 1000);
    // extragem ora si daca o val < 10 ii adaugam un 0;
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
      }
      let minutes = date.getMinutes();
      if(minutes < 10) {
        minutes = `0${minutes}`;
      }
    //   returnam ora si minutele sub formatul dorit
    return `${hours}:${minutes}`;

}

