const permission = async (req, res, next) => {
    try {
        if (req.session?.user_sid){
            res.redirect('/')
            return
        } else {
            next()
        }
    } catch (error) {
        console.log("Error permission", error);
        next(error)
    }
}

module.exports = permission