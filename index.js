const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

const PORT = 5500;
app.listen(PORT, () => {
  console.log("Server is up and running on port " + PORT);
});

//middlewares
app.use(express.json());

app.use("/api/v1/tasks/", tasks);

app.get("/hello", (req, res) => {
  res.send("Hello this is the task manager!");
});
