import bcrypt from 'bcryptjs'
import User from '../models/crudmodel.js'

const createUser = async(req , res) => {

    try{
    const {name, email, password} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        name, email, password:hashedPassword

    })
    res.status(201).json({
        message: 'user created successfully'
    })

    }catch(error){
        res.status(501).json({
            message: error.message
        })

    }
}
export {createUser};