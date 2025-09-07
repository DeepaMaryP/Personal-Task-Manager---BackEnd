import mongoose, { model, Schema } from "mongoose";

const taskSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true},       
        status: { type: String, enum: ["pending", "in_progress", "completed","archived"], default: "pending" },
        priority: { type: String, enum: ["low", "medium", "high","urgent"], default: "medium" },
    }, { timestamps: true });

const Task = model("Task", taskSchema)
export default Task
