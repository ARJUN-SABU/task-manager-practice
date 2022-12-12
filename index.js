const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const { connectToDb, getDbConnection } = require("./db/connect");

//middlewares
app.use(express.json());

const PORT = 3000;
let db;
connectToDb((err) => {
  if (!err) {
    app.listen(PORT, () => {
      console.log("Server is up and running on port " + PORT);
    });
    db = getDbConnection();
  } else {
    console.log(err);
  }
});

//add db object as a property to
//the req object and call the next
//middleware that is our router 'tasks'
//itself using next().
app.use(
  "/api/v1/tasks/",
  //this is a middleware
  (req, res, next) => {
    req.db = db;
    next();
  },
  tasks
);

app.get("/", (req, res) => {
  res.send("Hello this is the task manager!");
});
