const { ObjectId } = require("mongodb");

const getAllTasks = (req, res) => {
  let tasks = [];
  req.db
    ?.collection("tasks")
    .find()
    .forEach((task) => tasks.push(task))
    .then(() => res.status(200).json({ tasks }))
    .catch((err) => res.status(500).send(err));
  // res.send("All the items from the file");
};

const createTask = (req, res) => {
  // console.log(req.body);
  // res.send("Creating a task!");
  req.db
    .collection("tasks")
    .insertOne(req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).send(err));
};

const getTask = (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    req.db
      .collection("tasks")
      .findOne({ _id: ObjectId(req.params.id) })
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).send(err));
  } else {
    res.status(400).json({
      Error_Message: "Invalid Id",
    });
  }
};

//Patch method: Updates only the required fields
const updateTask = (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    req.db
      .collection("tasks")
      .updateOne(
        {
          _id: ObjectId(req.params.id),
        },
        {
          $set: req.body,
        }
      )
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(500).json(err));
  } else {
    res.status(400).json({
      Error_message: "Invalid Id",
    });
  }
};

//Put method: Replaces the entire document.
const editTask = (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    req.db
      .collection("tasks")
      .replaceOne(
        {
          _id: ObjectId(req.params.id),
        },
        req.body
      )
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(500).json(err));
  } else {
    res.status(400).json({
      Error_message: "Invalid Id",
    });
  }
};

const deleteTask = (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    req.db
      .collection("tasks")
      .deleteOne({
        _id: ObjectId(req.params.id),
      })
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(500).send(err));
  } else {
    res.status(400).send({
      Error_Message: "Invalid Id",
    });
  }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  editTask,
};
