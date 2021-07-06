const express = require("express");
const {rootRouter} = require("./routers/root.router");
//setup static file
const path = require("path");
const app = express();


//setup static file
const pathPublicDirectory = path.join(__dirname, "./public")
http://localhost:7000/public =>đi vào thư mục public 
console.log("pathPublicDirectory:",pathPublicDirectory);
app.use("/public",express.static(pathPublicDirectory))
//setup app sử dụng dạng json
app.use(express.json());

// url: http://localhost:7000/
app.use("/api",rootRouter); 
/**
 * method:get
 * url: httlp://localhost:7000/
 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});
  
const port = 7000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
