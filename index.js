const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const { connectToDb, getDbConnection } = require("./db/connect");
const notFound = require("./middleware/not-found");

const PORT = 3000;
let db;

//middlewares
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Hello this is the task manager!");
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

//we have used another middleware above
//that is, when the url starts with
//'/api/v1/tasks', then the above middleware
//will run, and if it is any other url, then
//this not found middleware will run.
app.use(notFound);

//connection
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
