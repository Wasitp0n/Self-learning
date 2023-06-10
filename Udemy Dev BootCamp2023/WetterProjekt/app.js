const express = require("express");
const https = require("http");

const app = express();
app.get("/", function (req, res) {
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=London&appid=863995f04e9191f13229bd6622230502&units=metric";
  //pass url to get response
  https.get(url, function (response) {
    console.log(response.statusCode);
    // statusCode = 200 - connect

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      // JSON.parse ----- of responding and translate to JSON// Obj code
      // JSON.stringify ------ change obj to JSON
      const temp = weatherData.main.temp;
      const weatherDescrip = weatherData.weather[0].description;
    });
  });

  res.send("Server is up and running");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
