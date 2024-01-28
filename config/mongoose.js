const mongoose = require('mongoose');
const env = require('./environment');

async function main() {
    const mongoURI = env.mongoose_path;
    await mongoose.connect(mongoURI);

    console.log("Mongoose Connection Successful !! ");
}

main().catch(error => console.log("Connection not successful !!", error));
