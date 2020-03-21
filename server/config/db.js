const mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.ConnectString,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });

        console.log('MongoDB connected!');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;
