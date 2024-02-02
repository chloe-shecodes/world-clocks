function updateTime() {
  let brusselsElement = document.querySelector("#brussels");
  let brusselsDateElement = brusselsElement.querySelector(".date");
  let brusselsTimeElement = brusselsElement.querySelector(".time");
  let brusselsLocalTime = moment().tz("Europe/Brussels");
  brusselsDateElement.innerHTML = brusselsLocalTime.format("MMMM Do YYYY");
  brusselsTimeElement.innerHTML = brusselsLocalTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkLocalTime = moment().tz("America/New_York");
  newYorkDateElement.innerHTML = newYorkLocalTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkLocalTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoLocalTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoLocalTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoLocalTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyLocalTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyLocalTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyLocalTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let selectedCity = event.target.value;
  if (selectedCity === "current") {
    selectedCity = moment.tz.guess();
  }
  let selectedCityName = selectedCity.replace("_", " ").split("/")[1];
  let selectedCityTime = moment().tz(selectedCity);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${selectedCityName}</h2>
        <div class="date">${selectedCityTime.format("MMMM Do YYYY")}</div>
        <a href="/">Back to all cities</a>
      </div>
      <div class="time">${selectedCityTime.format(
        "hh:mm:ss"
      )}<small>${selectedCityTime.format("A")}</small></div>
      
    </div> 
    `;
}

updateTime;
setInterval(updateTime, 1000);

let selectedCityElement = document.querySelector("#selected-city");
selectedCityElement.addEventListener("change", updateCity);
