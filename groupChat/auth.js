const { User } = require("./db/schema.js");

module.exports = (req , res , next)=>{
    if(!req.headers.authorization) return res.status(401).send("Unauthorized");
    var token = req.headers.authorization.split(" ")[1];
    if(!token) return res.status(401);
    try {
        axios.get(`${process.env.AUTH_URL}/user/user-details`, {
            headers: {
                Authorization: `Token ${token}`
            }
        }).then(async (response)=>{
            let user = await User.findOne({id : response.data.user.id});
            if(!user || user == null){
                user = new User({
                    username : response.data.user.username,
                    id : response.data.user.id,
                    profileImg : response.data.profile_picture,
                    lastOnline : Date.now(),
                    groups : [],
                    chats : []
                });
                await user.save();
            }
            req.user = user;
            next();
        }).catch((err)=>{return res.sendStatus(401)});
    } catch (error) {
        return res.sendStatus(401);
    }
}