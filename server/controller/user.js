const userSchema = require('../models/user')

const getUser = async (req,res) => {
    res.status(200).json({
        success:true,
        data:req.user
    })
}

const postUser = async(req,res) => {
    try {
        const user = req.body
        const newuser = await new userSchema(user)
        await newuser.save()
        const token = newuser.getSignedToken()
        res.status(200).json({
            success:true,
            token
        })
    } catch (error) {
        res.status(400).json({
            sucess:false,
            error
        })
    }
}

const loginUser = async(req,res) => {
    const {email, password} = req.body
    if(!email || !password){
        res.status(404).json({
            success:false,
            message:"Please Enter Email and Password"
        })
    }
    try {
        
        const user = await userSchema.findOne({ email }).select("+password")
        if(!user){
            res.status(401).json({
                success:false,
                message:"Invalid Credentials"
            })
        }
        const isMatch = await user.matchPassword(password)
        if(!isMatch){
            res.status(401).json({
                success:false,
                message:"Invalid credentials"
            })
        }
        const token = user.getSignedToken()
        res.status(200).json({
            success:true,
            token       
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error:error
        })
    }
}

const get = async(req,res) => {
    const user = await userSchema.find()    
    res.send(user)
} 


module.exports = {
    getUser,
    postUser,
    loginUser,
    get
}