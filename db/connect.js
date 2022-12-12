const { MongoClient } = require("mongodb");
require("dotenv").config();

const connectionString = `mongodb+srv://${process.env.MONGODB_USER_NAME}:${process.env.MONGODB_PASSWORD}@taskmanager.hlcifeh.mongodb.net/Task-Manager?retryWrites=true&w=majority`;

let db;
const connectToDb = (cb) => {
  MongoClient.connect(connectionString)
    .then((client) => {
      db = client.db();
      cb();
    })
    .catch((err) => {
      cb(err);
    });
};

const getDbConnection = () => {
  return db;
};

module.exports = {
  connectToDb,
  getDbConnection,
};
