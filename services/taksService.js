import Task from "../models/task.js";

export const createTaskService = async (data) => {
    try {
        let newTask = new Task(data);
        newTask = await newTask.save();
        return { success: true }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: error.message || "Failed to create task",
            errors: error.errors || null, 
        };
    }
}

export const getAllTaskService = async () => {
    try {
        const allTasks = await Task.find();
        return { success: true, allTasks };

    } catch (error) {
        return { success: false }
    }
}

export const getTaskWithId = async (id) => {
    try {
        const task = await Task.findById(id)
        if (task) {
            return task
        }
        return false

    } catch (error) {
        return false
    }
}

export const updateTaskService = async (id, data) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, data);
        if (updatedTask) {
            return { success: true, message: "Task updated succesfully" }
        } else {
            return { success: false, message: "Failed to update" }
        }

    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: error.message || "Failed to update task",
            errors: error.errors || null, // contains field-level details (phone, email etc.)
        };
    }
}

export const deleteTaskService = async (id) => {
    try {
        await Task.findByIdAndDelete(id)
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}