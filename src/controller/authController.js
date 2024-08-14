const signup = (req, res, next) => {
    const body = req.body;

    if(!['1','2'].include(body.userTypy)){
        return res.status(400).json({
            status:'fail',
            message: "Invalid user type "
        })
    }

    con

    res.json({
        status: "success",
        message: "Signup route is working"
    });
}

module.exports = { signup };
