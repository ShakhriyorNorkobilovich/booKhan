const dotenv = require("dotenv");
dotenv.config();
const http = require("http");
const mongodb = require("mongodb");



const connectionString = process.env.MONGO_URL;
mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else{
        console.log("MongoDB connection succeed");
        module.exports = client;
        //console.log(client);
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = process.env.PORT ||3007;
        server.listen(PORT, function () {
        console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`);
});
    }
});