export const handleValidateUserSignIn = async (req, res, next) => {
    const { name, password } = req.body

    if (!name) {
        return res.status(400).json({ success: false, message: "please enter name" })
    }
    if (!password) {
        return res.status(400).json({ success: false, message: "please enter password" })
    }
    next()
}

export const validateUser = async (req, res, next) => {
    const { name, email, passwordHash, role} = req.body

    if (!name) {
        return res.status(400).json({ success: false, message: "please enter name" })
    }
    if (!email) {
        return res.status(400).json({ success: false, message: "please enter email" })
    }
    if (!passwordHash) {
        return res.status(400).json({ success: false, message: "please enter password" })
    }
    if (!role) {
        return res.status(400).json({ success: false, message: "please enter role" })
    }
    next()

}