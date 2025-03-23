const router = require('express').Router();
const HiveController = require("../controller/hive.controller");

router.post('/storeHive',HiveController.createHive);
router.get ('/getUserHiveList',HiveController.getUserHive);
router.post('/deleteHive',HiveController.deleteHive);
module.exports=router;