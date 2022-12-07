const express = require("express");
const app = express();

const PORT = 5500;
app.listen(PORT, () => {
  console.log("Server is up and running on port " + PORT);
});

app.get("/hello", (req, res) => {
  res.send("Hello this is the task manager!");
});
