function updateTime() {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyLocalTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyLocalTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyLocalTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

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
}

updateTime;
setInterval(updateTime, 1000);
