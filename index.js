const app = require('./app');
const db = require('./config/db')
const UserModel =require('./model/user.model')
const HiveModel =require('./model/hive.model')
const port =5000;

app.get('/',(req,res)=>{
    res.send("Hello World!!")
});

app.listen(port,()=>{
    console.log(`Server Listening on port http://localhost:${port}`);
});