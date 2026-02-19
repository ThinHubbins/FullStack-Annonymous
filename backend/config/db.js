const mongoose = require('mongoose')


const connectDB = ()=> {
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log('Connected to atlas');
    }
    ).catch(err => console.log(err)
    )
}
module.exports = connectDB