const express = require("express");
const app = express();
const { addDays } = require("date-fns");

app.get("/", (request, response) => {
  const result = addDays(new Date(), 100);
  const year = result.getFullYear();
  const month = result.getMonth();
  const day = result.getDate();
  const res = `${day}-${month + 1}-${year}`;

  response.send(`${res}`);
});

app.listen(3000);
module.exports = app;
