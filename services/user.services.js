const UserModel =require('../model/user.model')
class UserService{
    static async registerUser(username,email,password){
        try{
            const createUser =new UserModel({username,email,password});
            return await createUser.save();

        }catch(err){
            throw err;
        }
    }

}
module.exports=UserService;