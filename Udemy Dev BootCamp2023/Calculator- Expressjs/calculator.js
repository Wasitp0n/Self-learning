const express = require("express");
const bodyParser = require("body-parser");
// input npm

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// ลงแพคเกจ แล้วให้เก็บข้อมูลในรูปออบเจค

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = req.body.num1;
  var num2 = req.body.num2;
  var result = num1 + num2;
  // res.body= ข้อมูลที่ได้รับมา จากเวป

  res.send("The result of the calculation is " + result);
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
