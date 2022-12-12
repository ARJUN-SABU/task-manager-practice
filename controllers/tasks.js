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
  res.send("get single task!");
};

const updateTask = (req, res) => {
  res.send("Update the task!");
};

const deleteTask = (req, res) => {
  res.send("Delete task!");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
