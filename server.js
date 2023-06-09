// import the required modules/packages
const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const logger = require("morgan");
const bodyParser = require("body-parser");

// configure to database
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/express-server").then(()=>{
    console.log("Connected to database");
}).catch((err)=>{
    console.log("Failed to connect to Database", err);
});

// import routes
const appRoutes = require("./routes/appRoutes");

const port = 3000;

// app instance
const app = express();

// app configurations
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configure app to use routes
app.use("/", appRoutes);

// server instance
const server = http.createServer(app);

server.listen(port, ()=>{
    console.log(`server listening on port: ${port}`)
});