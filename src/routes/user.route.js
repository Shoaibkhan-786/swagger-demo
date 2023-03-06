const { Router } = require('express');
const userModel = require('../model/user.model');
const userRouter = Router();

userRouter.post('/users', async(req,res,next) => {
    const { email, name, password} = req.body;
    console.log(name)
    const newuser = await userModel.create({email, name, password});
    res.json(newuser);
    next();
})

userRouter.get('/users', async(req,res,next) => {
    const users = await userModel.find();
    res.json(users);
})


userRouter.get('/users/:userid', async(req,res,next) => {
    const { userid } = req.params;
    const user = await userModel.findById(userid);
    res.json(user);
})

userRouter.put('/users/:userid', async(req,res,next) => {
    const { userid } = req.params;
    const { email, password, name} = req.body;
    const user = await userModel.findByIdAndUpdate(userid,{name,email,password},{new:true});
    res.json(user);
})

userRouter.delete('/users/:userid', async(req,res,next) => {
    const { userid } = req.params;
    await userModel.findByIdAndDelete(userid);
    res.json('user deleted successfully');
})





module.exports = userRouter;