export const validateTask = async (req, res, next) => {

    const { title, description, status, priority } = req.body

    if (!title) {
        return res.status(400).json({ success: false, message: "Title cannot be empty" })
    }
    if (!description) {
        return res.status(400).json({ success: false, message: "Description cannot be empty" })
    }
    if (!status) {
        return res.status(400).json({ success: false, message: "Status cannot be empty" })
    }
    if (!priority) {
        return res.status(400).json({ success: false, message: "Priority cannot be empty" })
    }

    next()
}

export const validateTaskUpdate = (req, res, next) => {

    const { title, description, status, priority } = req.body

    // If the field exists, validate it. Otherwise, ignore.
    if (title !== undefined && title.trim() === "") {
        return res.status(400).json({ success: false, message: "Title cannot be empty" });
    }

    if (description !== undefined && description.trim() === "") {
        return res.status(400).json({ success: false, message: "Description cannot be empty" });
    }

    if (status !== undefined && status.trim() === "") {
        return res.status(400).json({ success: false, message: "status cannot be empty" });
    }

    if (priority !== undefined && priority.trim() === "") {
        return res.status(400).json({ success: false, message: "priority cannot be empty" });
    }

    next(); // ✅ continue to controller
};
