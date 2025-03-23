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


}
module.exports = HiVeServices;