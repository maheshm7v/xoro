const httpStatus = require("http-status");

const { taskService } = require("../services/task.service.js");
const catchAsync = require("../utils/catchAsync.js");
console.log(catchAsync);

const getTasks = catchAsync(async (req, res) => {
    const tasks = await taskService.get();
    res.status(httpStatus.OK).send(tasks);
});

const createTask = catchAsync(async (req, res) => {
    const { title, description } = req.body;
    const task = await taskService.create({ title, description })
    
    res.status(httpStatus.CREATED).send(task);
});

const updateTask = catchAsync(async (req, res) => {
    const {id} = req.params;
    const { title, description } = req.body;

    await taskService.update(id, { title, description });
    res.status(204).send();
});

const deleteTask = catchAsync(async (req, res) => {
    const {id} = req.params;
    await taskService.deletebyidId(id);

    res.status(204).send();
});

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
}