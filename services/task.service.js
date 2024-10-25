const Task = require("../models/Task.model");

const get = async () => {
    return await Task.find({});
}

const create = async (task) => {
    return await Task.create(task);
}

const update = async (id, { title, description }) => {
    return await Task.findByIdAndUpdate(id, { title, description }, { new: true });
}

const deletebyidId = async (id) => {
    return await Task.findByIdAndDelete(id);
}

module.exports.taskService = {
    get,
    create,
    deletebyidId,
    update
}