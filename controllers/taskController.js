import { createTaskService, deleteTaskService, getAllTaskService, getTaskWithId, updateTaskService } from "../services/taksService.js";

export const createTask = async (req, res) => {
    const result = await createTaskService(req.body)

    if (result.success) {
        return res.status(201).json({ success: true, message: "Task created successfully" })
    } else {      
        return res.status(500).json({
            success: false,
            message: result.message,
            errors: result.errors,
        });
    }
}

export const getTasks = async (req, res) => {
    const response = await getAllTaskService();
    if (response.success)
        return res.status(200).send(response);
    else {
        return res.status(500).json({ success: false, message: "Failed to get tasks" });
    }
}

export const getTaskById = async (req, res) => {
    const response = await getTaskWithId(req.params.id);
    if (response)
        return res.status(200).send(response);
    else {
        return res.status(500).json({ success: false, message: "Failed to get task" });
    }
}

export const updateTask = async (req, res) => {
    const response = await updateTaskService(req.params.id, req.body)

    if (response.success) {
        return res.status(200).send(response)
    } else {
        return res.status(500).json({
            success: false,
            message: result.message,
            errors: result.errors,
        });
    }
}

export const deleteTask = async (req, res) => {
    const response = await deleteTaskService(req.params.id)
    if (response) {
        return res.status(200).json({ success: true, message: "Task deleted successfully" })
    } else {
        return res.status(500).json({ success: false, message: "Failed to delete task" });
    }
}