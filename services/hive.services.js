const HiVeModel = require ("../model/hive.model");
class HiVeServices{
    static async createHive(userId,title){
        const createHive = new HiVeModel({userId,title});
        return await createHive.save();

    } 
    static async getHivedata(userId){
        console.log("Querying database for userId:", userId); // Debugging
        const hiveData = await HiVeModel.find({userId});
        console.log("Database query result:", hiveData); // Debugging
        return hiveData;
    }
    static async deleteHive(id){
        
        const deleted = await HiVeModel.findOneAndDelete({_id:id});
        
        return deleted;
    }


}
module.exports = HiVeServices;