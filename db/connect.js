const { MongoClient } = require("mongodb");

const connectionString =
  "mongodb+srv://arjun:1234@taskmanager.hlcifeh.mongodb.net/Task-Manager?retryWrites=true&w=majority";

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
