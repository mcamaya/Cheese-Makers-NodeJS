const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB online");
    } catch (error) {
        console.error(error);
        throw new Error("Couldn't connect to Mongo");
    }
}

module.exports = {dbConnection};