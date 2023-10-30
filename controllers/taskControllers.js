const TaskModel = require("../models/taskModels")


module.exports.getTask = async (req, res) => {
    const tasks = await TaskModel.find()
    res.send(tasks)

}

module.exports.getTaskById = async (req, res) => {
    try {
        const { id } = req.params
        const task = await TaskModel.findById(id);

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.send(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

module.exports.saveTask = async (req, res) => {
    const { task } = req.body
    TaskModel.create({ task })
        .then((data) => {
            console.log("Saved Successfully")
            res.status(201).send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send({
                error: err,
                msg: "Something went Wrong"
            })
        })
}

module.exports.updateTask = async (req, res) => {

    const { id } = req.params
    const { task } = req.body


    TaskModel.findByIdAndUpdate(id, { task })
        .then(() => res.send("updated sucessfully"))
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "somthing went wrong" })
        })

}

module.exports.deleteTask = async (req, res) => {

    const { id } = req.params
    TaskModel.findByIdAndDelete(id)
        .then(() => res.send("Delete sucessfully"))
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "somthing went wrong" })
        })

}    

module.exports.deleteAllTasks = async (req, res) => {
    TaskModel.deleteMany({})
    .then(()=> res.send("Delete sucessfully"))
    .catch((err)=>{
        console.log(err);
            res.send({ error: err, msg: "somthing went wrong" })
    })
}