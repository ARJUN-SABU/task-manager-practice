const getAllTasks = (req, res) => {
  res.send("All the items from the file");
};

const createTask = (req, res) => {
  console.log(req.body);
  res.send("Creating a task!");
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
