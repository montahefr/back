const HiVeServices =require("../services/hive.services");
exports.createHive = async (req,res,next)=>{
    try{
        const{userId,title}=req.body;
        let hive =await HiVeServices.createHive(userId,title);
        res.json ({status:true,success:hive});

    }catch(error){
        next(error);
    }
}
exports.getUserHive = async (req, res, next) => {
    try {
        const { userId } = req.query;
        console.log("Fetching hives for userId:", userId); // Debugging

        let hive = await HiVeServices.getHivedata(userId);
        console.log("Fetched hives:", hive); // Debugging

        res.json({ status: true, success: hive });
    } catch (error) {
        next(error);
    }
};