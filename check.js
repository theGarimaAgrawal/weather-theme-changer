const apiKey = "";
const url = `https://api.weatherapi.com/v1/current.json?q=Shangai&key=${apiKey}`;

fetch(url).then((response) => {
  if (response.ok) {
    console.log("Response is ok");
    response.json().then((data) => {
      console.log(data.current.condition.text);
      applyTheme(data.current.condition.text);
    });
  } else {
    console.log("Response is not ok");
  }
});
function applyTheme(colour) {
  switch (colour.toLowerCase()) {
    case "partly cloudy":
      document.body.classList.add("lightBlue");
      break;
    case "patchy rain nearby":
      document.body.classList.add("rainyGray");
      break;
    case "sunny":
      document.body.classList.add("yellow");
      break;
    case "overcast":
      document.body.classList.add("overcast");
      break;
    case "mist":
      document.body.classList.add("mist");
      break;
    default:
      console.log("No matching theme for the weather condition.");
  }
}
