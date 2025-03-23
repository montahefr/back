const express = require ('express');
const body_parser = require('body-parser');
const userRouter=require ('./routers/user.router');
const HiveRouter = require ('./routers/hive.router');



const app =express();
app.use(body_parser.json());
app.use('/',userRouter);
app.use('/',HiveRouter);

module.exports=app;
