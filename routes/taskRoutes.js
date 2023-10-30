const {Router} = require("express")
const {getTask,getTaskById,saveTask,deleteTask,updateTask, deleteAllTasks} = require("../controllers/taskControllers")
const router = Router()
router.get("/get",getTask);
router.get("/get/:id", getTaskById);
router.post("/save",saveTask)
router.put("/update/:id",updateTask)
router.delete("/delete/:id" ,deleteTask);
router.delete("/delete" ,deleteAllTasks);
module.exports = router