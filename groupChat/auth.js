module.exports = (req , res , next)=>{
    if(!req.headers.authorization) return res.status(401).send("Unauthorized");
    var token = req.headers.authorization.split(" ")[1];
    if(!token) return res.status(401);
    try {
        axios.get(`${process.env.AUTH_URL}/user/user-details`, {
            headers: {
                Authorization: `Token ${token}`
            }
        }).then((response)=>{
            req.user = response.data.user;
            next();
        }).catch((err)=>{return res.sendStatus(401)});
    } catch (error) {
        return res.sendStatus(401);
    }
}